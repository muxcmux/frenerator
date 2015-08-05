require 'rails/generators/base'

module Frenerator
  module Generators
    class FrontendGenerator < Rails::Generators::Base
      source_root File.expand_path('../templates', __FILE__)
      
      def linters
        copy_file ".coffee-lint.json", ".coffee-lint.json"
        copy_file ".scss-lint.yml", ".scss-lint.yml"
      end
      
      def bower
        copy_file ".bowerrc", ".bowerrc"
        copy_file "bower.json", "bower.json"
      end
      
      def node
        copy_file "package.json", "package.json"
      end
      
      def grunt
        copy_file "Gruntfile.js", "Gruntfile.js"
      end
      
      def components
        copy_file ".keep", "app/components/.keep"
      end
      
      def javascripts
        directory "javascripts", "app/assets/javascripts"
      end
      
      def livereload
        gem_group :development do
          gem 'guard-bundler'
          gem 'guard-rails'
          gem 'guard-livereload'
          gem 'rack-livereload'
        end
        copy_file "Guardfile", "Guardfile"
      end
      
      def asset_gems
        gem_group :development do
          gem 'coffee-rails', version: '~> 4.1.0'
          gem 'sass-rails', version: '~> 5.0.3'
          gem 'scss-lint'
          gem 'autoprefixer-rails', version: '~> 5.2.0.1'
          gem 'sprockets-media_query_combiner', version: '~> 0.0.8'
          gem 'htmlcompressor', version: '~> 0.2.0'
        end
      end
    end
  end
end
