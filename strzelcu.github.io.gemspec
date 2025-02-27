# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "strzelcu.github.io"
  spec.version       = "0.1.0"
  spec.authors       = ["Tomasz Strzelecki"]
  spec.email         = ["kontakt@strzelecki.opole.pl"]

  spec.summary       = "Tomasz Strzelecki - Software Engineer"
  spec.homepage      = "https://strzelcu.github.io/strzelcu.github.io"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", ">= 3.3", "< 5.0"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.6"
  spec.add_runtime_dependency "jekyll-sitemap", "~> 1.4"

  spec.add_development_dependency "bundler", ">= 1.16"
  spec.add_development_dependency "rake", "~> 12.0"
end
