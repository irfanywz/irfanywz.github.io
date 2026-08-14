---
title: "Hello World"
slug: 'hello-world'
description: "this is description if you want"
date: 2011-12-07T09:08:30+07:00
image: hello-world.avif
topics: ["Kode"]
draft: false
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.


{{< interactive-wrapper >}}

  <!-- Cover Slide -->
  {{< interactive-slide 
      type="cover" 
      title="Dasar-Dasar Jaringan Komputer" 
      tag="Sistem Informasi" 
      icon="icon-[lucide--network]" >}}

  <!-- Slide Materi -->
  {{< interactive-slide 
      type="material" 
      title="Apa itu IP Address?" 
      tag="Materi 01" 
      content="IP Address (Internet Protocol Address) adalah identitas numerik yang diberikan kepada setiap perangkat yang terhubung ke jaringan komputer yang menggunakan Protokol Internet untuk berkomunikasi." >}}

  <!-- Slide Video Embed (Youtube) -->
  {{< interactive-slide 
      type="video" 
      title="Penjelasan Visual Model OSI" 
      videoUrl="https://www.youtube.com/embed/vv4y_uOneC0" >}}

  <!-- Kuis 1: Multiple Choice -->
  {{< interactive-slide 
      type="quiz" 
      title="Layer mana yang bertanggung jawab atas routing data paket?" 
      tag="Kuis 01" 
      options="Data Link Layer,Network Layer,Transport Layer,Application Layer" 
      correct="1" >}}

  <!-- Kuis 2: Benar / Salah -->
  {{< interactive-slide 
      type="quiz-tf" 
      title="MAC Address berada pada Layer 3 (Network Layer) di Model OSI." 
      tag="Kuis 02" 
      tfAnswer="false" >}}

  <!-- Kuis 3: Isian Singkat -->
  {{< interactive-slide 
      type="quiz-fill" 
      title="Sebutkan perintah CLI untuk mengecek konektivitas IP!" 
      tag="Kuis 03" 
      answerKey="ping" >}}

  <!-- Summary Slide -->
  {{< interactive-slide 
      type="summary" 
      title="Modul Selesai!" 
      icon="icon-[lucide--trophy]" >}}

{{< /interactive-wrapper >}}

## ShortCode List

### Table of content
<pre><code>{{&lt; toc &gt;}}</code></pre>

{{< toc >}}


### Quiz
{{< quiz 
    q="Proyek jaringan komputer cikal bakal internet yang dikembangkan oleh Departemen Pertahanan Amerika Serikat pada tahun 1960-an bernama?" 
    a="ARPANET" 
    b="MILNET" 
    c="NSFNET" 
    d="Ethernet" 
    ans="a" 
>}}

{{< quiz-input 
    q="Kepanjangan dari singkatan AI yang saat ini sedang masif digunakan di berbagai industri adalah?" 
    ans="Artificial Intelligence" 
    hint="Kecerdasan buatan dalam bahasa Inggris" 
>}}

{{< quiz-tf 
    q="World Wide Web (WWW) pertama kali diciptakan dan ditemukan oleh ilmuwan asal Inggris bernama Tim Berners-Lee pada tahun 1989." 
    ans="true" 
>}}

{{< quiz-multi 
    q="Manakah perangkat di bawah ini yang dikategorikan sebagai perangkat keras (hardware) jenis Output pada komputer?" 
    a="Monitor" 
    b="Keyboard" 
    c="Printer" 
    d="Speaker" 
    ans="a,c,d" 
>}}

{{< poll 
    id="ai-poll" 
    q="Menurut lu, seberapa besar dampak AI bakal mengubah industri konten digital dalam 5 tahun ke depan?" 
    a="Mengubah total secara drastis! 🚀" 
    b="Biasa aja, cuma alat bantu biasa 🤖" 
>}}

### Youtube

```
{{</* youtube-lite id="dQw4w9WgXcQ" title="Tutorial Setup Hugo & Tailwind v4" */>}}
```

{{< youtube-lite id="dQw4w9WgXcQ" title="Tutorial Setup Hugo & Tailwind v4" >}}

### Todo

<pre><code class="language-html">
{{&lt; todo id=&quot;spring-seeds&quot; &gt;}}
Beli 50 biji Parsnip di Pierre&#039;s General Store.
{{&lt; /todo &gt;}}

{{&lt; todo id=&quot;spring-barn&quot; &gt;}}
Upgrade kandang ternak (Barn) ke level 2.
{{&lt; /todo &gt;}}

{{&lt; todo id=&quot;spring-fish&quot; &gt;}}
Tangkap ikan Legendaris *Legend* di dekat pegunungan.
{{&lt; /todo &gt;}}
</code></pre>

{{< todo id="spring-seeds" >}}
Beli 50 biji Parsnip di Pierre's General Store.
{{< /todo >}}

{{< todo id="spring-barn" >}}
Upgrade kandang ternak (Barn) ke level 2.
{{< /todo >}}

{{< todo id="spring-fish" >}}
Tangkap ikan Legendaris *Legend* di dekat pegunungan.
{{< /todo >}}

### Steps

<pre><code class="language-html">
{{&lt; steps &gt;}}

{{&lt; step n=&quot;1&quot; title=&quot;Clone Repository GitHub&quot; &gt;}}
Buka terminal kamu lalu jalankan perintah `git clone https://github.com/username/repo.git` untuk mendownload project.
{{&lt; /step &gt;}}

{{&lt; step n=&quot;2&quot; title=&quot;Install Dependencies&quot; &gt;}}
Masuk ke dalam folder project lalu jalankan `npm install` atau `pnpm install` untuk memasang semua modul yang dibutuhkan.
{{&lt; /step &gt;}}

{{&lt; step n=&quot;3&quot; title=&quot;Jalankan Server Lokal&quot; &gt;}}
Ketik perintah `hugo server` di terminal untuk melihat pratinjau situs secara langsung di browser `http://localhost:1313`.
{{&lt; /step &gt;}}

{{&lt; /steps &gt;}}
</code></pre>

{{< steps >}}

{{< step n="1" title="Clone Repository GitHub" >}}
Buka terminal kamu lalu jalankan perintah `git clone https://github.com/username/repo.git` untuk mendownload project.
{{< /step >}}

{{< step n="2" title="Install Dependencies" >}}
Masuk ke dalam folder project lalu jalankan `npm install` atau `pnpm install` untuk memasang semua modul yang dibutuhkan.
{{< /step >}}

{{< step n="3" title="Jalankan Server Lokal" >}}
Ketik perintah `hugo server` di terminal untuk melihat pratinjau situs secara langsung di browser `http://localhost:1313`.
{{< /step >}}

{{< /steps >}}

### Note

<pre><code class="language-html">
{{&lt; note type=&quot;caution&quot; &gt;}}
Jangan menghapus folder `.git` kecuali kamu benar-benar ingin mereset seluruh history repository.
{{&lt; /note &gt;}}
</code></pre>

{{< note type="caution" >}}
Jangan menghapus folder `.git` kecuali kamu benar-benar ingin mereset seluruh history repository.
{{< /note >}}

### Link Rel

<pre><code class="language-html">
{{&lt; link to=&quot;https://example.com&quot; text=&quot;Link Sponsor&quot; external=&quot;true&quot; rel=&quot;nofollow&quot; /&gt;}}
</code></pre>

{{< link to="https://example.com" text="Link Sponsor" external="true" rel="nofollow" />}}

### Spoiler

<pre><code class="language-html">
{{&lt; spoiler label=&quot;Klik untuk lihat Kunci Jawaban&quot; &gt;}}
Hasil akhir dari perhitungan rumus di atas adalah **42**.
{{&lt; /spoiler &gt;}}
</code></pre>

{{< spoiler >}}
Sebenarnya tokoh utama di akhir cerita malah bergabung dengan villain utama demi menyelamatkan dunia.
{{< /spoiler >}}

{{< spoiler label="Klik untuk lihat Kunci Jawaban" >}}
Hasil akhir dari perhitungan rumus di atas adalah **42**.
{{< /spoiler >}}

### Alert

<pre><code>{{&lt; alert title=&quot;Catatan Penting&quot; &gt;}}
Pastikan kamu sudah membaca dokumentasi sebelum mengubah konfigurasi utama.
{{&lt; /alert &gt;}}</code></pre>

{{< alert title="Catatan Penting" >}}
Pastikan kamu sudah membaca dokumentasi sebelum mengubah konfigurasi utama.
{{< /alert >}}

{{< alert type="success" title="Berhasil!" >}}
Deploy situs statis ke GitHub Pages telah selesai dilakukan tanpa error.
{{< /alert >}}

{{< alert type="warning" title="Peringatan" >}}
Fitur ini masih dalam tahap eksperimental dan bisa berubah sewaktu-waktu.
{{< /alert >}}

{{< alert type="danger" title="Perhatian Keras!" >}}
Jangan pernah membagikan token API rahasia kamu ke dalam repository publik.
{{< /alert >}}

### Accordion

<pre><code>{{&lt; accordion title=&quot;Klik untuk Buka&quot; open=&quot;true&quot; &gt;}}
Isi konten bebas di sini, bisa teks biasa, bold, atau list.
{{&lt; /accordion &gt;}}
</code></pre>

{{< accordion title="Klik untuk Buka" open="true" >}}
Isi konten bebas di sini, bisa teks biasa, bold, atau list.
{{< /accordion >}}

{{< accordion title="Klik untuk Buka" open="true" >}}
Isi konten bebas di sini, bisa teks biasa, bold, atau list.
{{< /accordion >}}


### Image Grid
<pre><code>{{&lt; image-grid &gt;}}

{{&lt; image-link &quot;pyside6-portable-1.avif&quot; &quot;Image 1&quot; &quot;py6&quot; &gt;}}
{{&lt; image-link &quot;pyside6-portable-2.avif&quot; &quot;Image 2&quot; &quot;py6&quot; &gt;}}

{{&lt; /image-grid &gt;}}</code>
</pre>

### ShortCode with title and toggle

<pre><code>{{&lt; code lang=&quot;javascript&quot; title=&quot;Example Function&quot; open="false" &gt;}}
function greet(name) {
  return `Hello, ${name}!`;
}
{{&lt; /code &gt;}}</code></pre>

{{< code lang="javascript" title="Example Function" open="false" >}}
function greet(name) {
  return `Hello, ${name}!`;
}
{{< /code >}}

# Highlighting Specific Lines

```go {lineNos=true hl_lines=[3,6,8]}
package main

import "fmt"  // This line will be highlighted

func main() {
    message := "Hello, World!"  // This line will also be highlighted

    fmt.Println(message)  // This line will also be highlighted

    for i := 0; i < 3; i++ {
        fmt.Printf("Count: %d\n", i)
    }
}
```

# Headers

```
# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------
```	

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------

------

# Emphasis

```
Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~
```

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

------

# Lists

```
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

1. Make my changes
    1. Fix bug
    2. Improve formatting
        - Make the headings bigger
2. Push my commits to GitHub
3. Open a pull request
    * Describe my changes
    * Mention all the members of my team
        * Ask for feedback

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!
```

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

1. Make my changes
    1. Fix bug
    2. Improve formatting
        - Make the headings bigger
2. Push my commits to GitHub
3. Open a pull request
    * Describe my changes
    * Mention all the members of my team
        * Ask for feedback

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

------

# Task lists

```
- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```

- [x] Finish my changes
- [ ] Push my commits to GitHub
- [ ] Open a pull request
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [ ] this is a complete item
- [ ] this is an incomplete item

------

# Ignoring Markdown formatting

You can tell GitHub to ignore (or escape) Markdown formatting by using \ before the Markdown character.

```
Let's rename \*our-new-project\* to \*our-old-project\*.
```

Let's rename \*our-new-project\* to \*our-old-project\*.

------

# Links

```
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com
```

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

------

# Images

```
Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"
```

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

------

# [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

```
Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.
```

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

------

# Code and Syntax Highlighting

```
Inline `code` has `back-ticks around` it.
```

Inline `code` has `back-ticks around` it.

```c#
using System.IO.Compression;

#pragma warning disable 414, 3021

namespace MyApplication
{
    [Obsolete("...")]
    class Program : IInterface
    {
        public static List<int> JustDoIt(int count)
        {
            Console.WriteLine($"Hello {Name}!");
            return new List<int>(new int[] { 1, 2, 3 })
        }
    }
}
```

```css
@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}
```

```javascript
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

export  $initHighlight;
```

```php
require_once 'Zend/Uri/Http.php';

namespace Location\Web;

interface Factory
{
    static function _factory();
}

abstract class URI extends BaseURI implements Factory
{
    abstract function test();

    public static $st1 = 1;
    const ME = "Yo";
    var $list = NULL;
    private $var;

    /**
     * Returns a URI
     *
     * @return URI
     */
    static public function _factory($stats = array(), $uri = 'http')
    {
        echo __METHOD__;
        $uri = explode(':', $uri, 0b10);
        $schemeSpecific = isset($uri[1]) ? $uri[1] : '';
        $desc = 'Multi
line description';

        // Security check
        if (!ctype_alnum($scheme)) {
            throw new Zend_Uri_Exception('Illegal scheme');
        }

        $this->var = 0 - self::$st;
        $this->list = list(Array("1"=> 2, 2=>self::ME, 3 => \Location\Web\URI::class));

        return [
            'uri'   => $uri,
            'value' => null,
        ];
    }
}

echo URI::ME . URI::$st1;

__halt_compiler () ; datahere
datahere
datahere */
datahere
```

------

# Tables

```
Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |

| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |
```

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

| Command | Description |
| --- | --- |
| git status | List all new or modified files |
| git diff | Show file differences that haven't been staged |

| Command | Description |
| --- | --- |
| `git status` | List all *new or modified* files |
| `git diff` | Show file differences that **haven't been** staged |

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |

| Name     | Character |
| ---      | ---       |
| Backtick | `         |
| Pipe     | \|        |

------

# Blockquotes

```
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.
```

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

------

# Inline HTML

```
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>
```

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

------

# Horizontal Rules

```
Three or more...

---

Hyphens

***

Asterisks

___

Underscores
```

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

------

[Source](https://gist.githubusercontent.com/allysonsilva/85fff14a22bbdf55485be947566cc09e/raw/fa8048a906ebed3c445d08b20c9173afd1b4a1e5/Full-Markdown.md)


***

Tekan tombol <kbd>Ctrl</kbd> + <kbd>C</kbd> untuk menyalin teks.
Atau ketik perintah <kbd>git status</kbd> di terminal.