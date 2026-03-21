require "nokogiri"

Jekyll::Hooks.register :posts, :post_render do |post|
  doc = Nokogiri::HTML(post.output)
  
  content_container = doc.at_css(".blog-post-content")
  toc_container = doc.at_css(".toc")
  read_time_display = doc.at_css(".reading-time")

  if content_container
    content_container.css("h2:not(.no-id)").each do |heading|
      heading_text = heading.text
      heading_id = Jekyll::Utils.slugify(heading_text)
      heading["id"] = heading_id

      li = Nokogiri::XML::Node.new("li", doc)
      li.content = heading_text
      
      anchor = Nokogiri::XML::Node.new("a", doc)
      anchor["class"] = "invis-card-link"
      anchor["href"] = "##{heading_id}"
      
      li.add_child(anchor)
      toc_container.add_child(li)
    end

    content_container.traverse do |element|
      if element.text? && !["code", "pre", "abbr", "script", "style"].include?(element.parent.name)
        new_content = element.content.gsub(/[A-Z]{3,}/) do |match|
          "<abbr>#{match}</abbr>"
        end
        element.replace(new_content) if new_content != element.content
      end
    end

    content_container.css(".footnote").each do |fnref|
      bq = Nokogiri::XML::Node.new("blockquote", doc)
      p = Nokogiri::XML::Node.new("p", doc)
      link = fnref["href"].delete_prefix("#")
      p.content = content_container.at_css("[id='#{link}']").text.sub(/↩$/, "")
      bq["class"] = "touch-footnote"
      bq.add_child(p)
      fnref.parent.parent.after(bq)
    end
    
    word_count = content_container.text.split.size
    wpm = 265
    read_time = (word_count.to_f / wpm).round
    read_time_display.content = read_time <= 1 ? "1 min" : "#{read_time} mins"

  end
  post.output = doc.to_html
end