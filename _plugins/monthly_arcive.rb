module Jekyll
  class MonthlyArchive < Liquid::Tag
    def initialize(tag_name, markup, tokens)
      @opts = {}
      if markup.strip =~ /\s*counter:(\w+)/i
        @opts['counter'] = ($1 == 'true')
        markup = markup.strip.sub(/counter:(\w+)/i, '')
      end
      super
    end

    def render(context)
      html = ""
      posts = context.registers[:site].posts.reverse
      posts = posts.group_by{|c| {"month" => c.date.month, "year" => c.date.year}}
      posts.each do |period, post|
        month_dir = "/blog/#{period["year"]}/#{"%02d" % period["month"]}/"
        html << "<li><a href='#{month_dir}'>#{period["year"]}-#{"%02d" % period["month"]}"
        html << "  (#{post.count})" if @opts['counter']
        html << "</a></li>"
      end
      html
    end
  end
end


Liquid::Template.register_tag('tag_monthly_archive', Jekyll::MonthlyArchive)
