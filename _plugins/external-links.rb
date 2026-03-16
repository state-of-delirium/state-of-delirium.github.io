require "nokogiri"
require "uri"

Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
    next unless doc.output_ext == ".html"

    site_url = doc.site.config["url"]
    content = Nokogiri::HTML(doc.output)
    links_modified = false

    content.css("a").each do |a|
        link = a["href"]
        classes = a["class"].to_s.split

        next if link.nil? || classes.include?("no-target-blank")

        is_external = begin
            if link.match?(URI.regexp(%w(http https)))
                URI.parse(link).host != URI.parse(site_url).host
            else
                false
            end
        rescue URI::InvalidURIError
            false
        end

        if is_external
            a["target"] = "_blank"
            a["rel"] = "noreferrer noopener"
            classes << "external-link"
            a["class"] = classes.join(" ")
            links_modified = true
        end
    end

    doc.output = content.to_html if links_modified
end