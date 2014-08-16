module Jekyll
  module AssetFilter

    def pure_url(input)
      if input.end_with? 'index.html'
        input.sub /index.html$/, ''
      else
        input
      end
    end

  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)