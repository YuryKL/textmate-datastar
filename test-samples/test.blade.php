{{-- DataStar Test File for Laravel Blade --}}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DataStar + Blade Test</title>
</head>
<body>

  <h1>DataStar Syntax Highlighting in Blade</h1>

  {{-- Basic DataStar plugins --}}
  <div data-show="$visible">Show when visible</div>
  <div data-text="$message">{{ $message }}</div>

  {{-- With Blade variables --}}
  <div data-signals="{count: {{ $initialCount }}, name: '{{ $username }}'}">
    Signals with Blade
  </div>

  {{-- DataStar with keys and modifiers --}}
  <button data-on:click__debounce.500ms="$count++">
    Increment ({{ $count }})
  </button>

  {{-- DataStar expressions --}}
  <div data-text="$items.map(x => x * 2).join(', ')">
    Array mapping
  </div>

  {{-- Arrow functions --}}
  <div data-text="$users.filter(u => u.active).length">
    Active users
  </div>

  {{-- Object literals --}}
  <button data-on:click="@post('/api/user', {id: {{ $userId }}, name: $name})">
    Submit with Blade ID
  </button>

  {{-- Template literals --}}
  <div data-text="`Hello ${$name}!`">
    Template literal
  </div>

  {{ !!
 <div data-on:click=$foo></div>

!! }}

  {{-- Blade directives with DataStar --}}
  @foreach($items as $index => $item)
    <div data-bind:value="$item{{ $index }}">
      {{ $item->name }}
    </div>
  @endforeach

  @if($showDatastar)
    <button data-on:click="@get('/api/data')">
      Fetch Data
    </button>
  @endif

  {{-- Using Blade components with DataStar --}}
  <x-button data-on:click="$count++">
    Increment
  </x-button>

  {{-- Nested keys --}}
  <div data-attr:data-bind:foo="$value">
    Nested plugin-like keys
  </div>

  {{-- Complex expressions --}}
  <button data-on:click="@post('/api/batch', {
    items: [...$cart].map(item => ({...item, processed: true})),
    total: $cart.reduce((sum, item) => sum + (item.price ?? 0), 0),
    userId: {{ $userId }}
  })">
    Submit cart (Blade + DataStar)
  </button>

  {{-- Blade escaped content --}}
  <div data-text="$content">
    {!! $content !!}
  </div>

  {{-- Auth checks with DataStar --}}
  @auth
    <button data-on:click="@post('/logout')" data-signals="{user: '{{ auth()->user()->name }}'}">
      Logout
    </button>
  @endauth

  @guest
    <a href="/login" data-on:click="@get('/login')">Login</a>
  @endguest

</body>
</html>
