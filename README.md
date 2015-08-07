# Frenerator

Rails generator for a common web front-end

## Installation

On a *FRESH* Rails app in Gemfile:

```ruby
gem 'frenerator'
```

And then execute:

    $ bundle

You now have the frenerator. Run with:

    $ rails g frenerator:frontend

## Usage

1. `npm install && bower install`
2. `bundle exec guard` (if you want livereload, else `bundle exec rails s`)
3. `grunt`

The grunt linter uses the 'sass-lint' ruby gem to lint stylesheets and it is
configured with `bundleExec: true` to make sure everyone is on the same page.

### Javascript structure overview

Main javascript file is `application.js` (the one that gets included via a `script` tag)

Sprockets for dependency management: `application.js` includes app parts:

    1. `dependencies` Place to include all libs, frameworks, etc.
    2. `namespace` Gives common top level structure and defines `App`
    3. `templates` Handlebars templates
    4. `base` Define base coffee classes here
    5. `collections` -||- collections
    6. `models` -||- models
    7. `views` -||- views
    8. `components` All the top level backbone views live here
    9. `main` - the init code

_You HAVE to manually include all the components you want to use inside `components.coffee`
or your component code will not be compiled in `application.js`_

Components are basically top level views and they live in the `components` dir
along with their associated `scss` styles, `.hbs` templates and `.erb` partials.
Every component _must_ have an associated `el`, which is a valid dom selector.
If it doesn't `main` will not initialize this component. This is handy, because
you can have components that are initialized only on certain pages. If you want
a component to be initialized everywhere, you can simply set it's `el` to `body`

##### App.Dispatch and app:ready

`App.Dispatch` is a plain old backbone events mixin and is globally available to
components to comunicate with each other. When all components have initialized
`App.Dispatch` triggers an `app:ready` event, so that if your component is depending
on something else, you can wait until `app:ready` to do your work. It will be more
likely that the component you are depending on will be available at the time this
event is fired, rather than in your `@initialize` method

## Development

After checking out the repo, run `bin/setup` to install dependencies. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/muxcmux/frenerator.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

