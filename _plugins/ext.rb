def tag_file_body(tag, layout)
  return <<~TEXT
  ---
  layout: #{layout}
  tag: #{tag}
  ---
  TEXT
end

def tag_files(site)
  config = site.config
  site.tags.keys.each do |tag|
    source = File.expand_path(config["source"])
    path = config["collections"]["my_tags"]["filepath"]
    file = File.join(source, path, "#{tag}.md")

    yield tag, file
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  config = site.config
  site.tags.keys.each do |tag|
    source = File.expand_path(config["source"])
    path = config["collections"]["my_tags"]["filepath"]
    file = File.join(source, path, "#{tag}.md")

    next if File.exists?(file)

    layout = config["collections"]["my_tags"]["layout"]
    File.write(file, tag_file_body(tag, layout))
    p "Generate: #{file}"
  end
end
