# Testing Checklist

## Steps

1. Press `F5` to launch Extension Development Host `Developer: Debug Extension Host in New Window`. Alternatively, compile the extension to .vsix and install manually. `npx @vscode/vsce pack`
2. Open test files from `test-samples/`
3. Use **Inspect Editor Tokens and Scopes** to verify Datastar scopes

## Test Files by Scope

| File | Scope(s) | Extension Needed | Status |
|------|----------|------------------|--------|
| `test.html` | `text.html.basic` | None | Y |
| `test-derivative.html` | `text.html.derivative` | None | Y |
| `test.php` | `text.html.php` | PHP | Y |
| `test.twig` | `text.html.twig` | [Twig Language 2](https://marketplace.visualstudio.com/items?itemName=mblode.twig-language-2) | Y |
| `test.blade.php` | `text.html.php.blade` | [Laravel Blade](https://marketplace.visualstudio.com/items?itemName=onecentlin.laravel-blade) | Y |
| `test.edge` | `text.html.edge` | [Edge](https://marketplace.visualstudio.com/items?itemName=AdonisJS.vscode-edge) | Y |
| `test.njk` | `text.html.nunjucks`, `text.html.njk` | [Nunjucks](https://marketplace.visualstudio.com/items?itemName=ronnidc.nunjucks) | Y |
| `test.templ` | `source.templ` | [templ](https://marketplace.visualstudio.com/items?itemName=a-h.templ) | Y |
| `test.astro` | `source.astro` | [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) | Y |
| `test.gohtml` | `source.gohtml` | [Go Template](https://marketplace.visualstudio.com/items?itemName=jinliming2.vscode-go-template) | Y |
| `test.vue` | `text.html.vue`, `source.vue` | [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) | Y |
| `test.svelte` | `source.svelte`, `text.html.svelte` | [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) | Y |
| `test.hbs` | `text.html.handlebars` | [Handlebars](https://marketplace.visualstudio.com/items?itemName=andrejunges.Handlebars) | Y |
| `test.mustache` | `source.mustache` | None (built-in) | Y |
| `test.liquid` | `source.liquid` | [Liquid](https://marketplace.visualstudio.com/items?itemName=sissel.shopify-liquid) | Y |
| `test.erb` | `text.html.erb` | [ERB](https://marketplace.visualstudio.com/items?itemName=CraigMaslowski.erb) | Y |
| `test.ejs` | `text.html.ejs` | [EJS](https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support) | Y |
| `test.pug` | `text.pug` | None (built-in) | Y |
| `test.cshtml` | `text.aspnetcorerazor` | [C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) | Y* |
| `test-django.html` | `text.html.django` | [Django](https://marketplace.visualstudio.com/items?itemName=batisteo.vscode-django) | Y |
| `test-jinja.html` | `text.html.jinja` | [Jinja](https://marketplace.visualstudio.com/items?itemName=wholroyd.jinja) | Y |
| `test.jsp` | `text.html.jsp` | [Java](https://marketplace.visualstudio.com/items?itemName=redhat.java) | Y |

**Notes:**
- Y* = Grammar works but C# LSP semantic tokens override colors

## Results

- **Total scopes:** 25
- **Test files:** 22
- **Status:** 22/22 ✓
