<div align="center">

![alchemy](https://i.imgur.com/eE2rJ0x.png)

the content syndication built for 21 century

</div>

---

alchemy is just a codename, since I *always* have no idea with everything I did. Basically I'm an avid reader (and writer),
and love how people share their thoughts about anything from their perspectives.

Worth to mention that I'm a huge fan of HackerNews and always dreaming Indonesia will have a similar kind of HN
in order to make "people" easier to discover great writing from the "creators". I've built something similar for
internal use and basically very similar with HackerNews both in feature & interfaces, and I abandoned it for some
reason.

So this is a reincarnation of it.

But exclusively for anyone & for 21 century.

Here is why.

## The noise of internet

We do love Instagram, well, basically I didn't. Instagram successfully takes our time for something that *probably*
we don't need much. As an example, the information that we (have to) consume. Instagram is the best place for "show off".
OK probably Facebook is good too, but we knew that we are talking the same company, right?

Back to the context, I have an idea on *how to build "this content syndication" but with Instagram-like interfaces?*. The
good part, people *don't have to* learn the new interfaces. And the best part, the contents *probably* good for their careers
since this is only focus on development-related things.

And that's good, right?

If you know how to use Instagram, probably you'll know how to use this. And you'll love this, hopefully!

## Principles

I'm a Frontend Engineer, and I hate the *most web apps* today. So this "app" will be build based on what I hate as the
principles:

- **Offline-first**. Yes, I believe that web app is not always about being online. And also, people have different network
  condition. You got the point.
- **Mobile as first-class citizen**. So this app will *reliable* on any hardware specs. I use poor mobile device.
- **Community-driven**. If you know me, you probably knew it why.

The throughput from that 3 principles is to build something that accessible for *anyone*.

## Stacks

- Next.js — This framework is good in UX & DX side, so I choose this.
- CouchDB — I don't know does `localStorage` is the best place for storing content offline, so I will chose `indexedDB` instead
  (and yes I have experience with this).

In order to have minimal footprint, we'll use less dependencies as much as we can. And yes, for the "backend" I'll share
it later.

## User Stories™

For now the user stories are:

- [ ] As a User I can see the "timeline" with instagram-like UI: Image + caption + writer info.
- [ ] As a User I can see the list of content so I can "visit" the link that I'm interested.
- [ ] As a User I can read the "article" (the source/original and generated one).
- [ ] As a User I can read the article I bookmark even when offline mode.
- [ ] As a User I can see my bookmark's list.
- [ ] As a User I can visit the profile of writer with the list of their content.
- [ ] As a User I can share the post to another channel (FB, Twitter, LinkedIn).
- [ ] As a User I can "like" the post
- [ ] As a User I can "comment" the post

I will set the priority to make the release faster.

## Development

I think using TDD-ish approach in development is the best way to work with developers in *distributed* team.
So here is the detail:

- Someone is writing a test (so the test will be fail)
- Someone is writing a code (to make the test pass)

The workflow is:

Run the test:

```bash
yarn test --watch
```

You will see the failed test, right? So, make it pass by writing some code that *driven* by the existing tests.

```bash
yarn dev
```

If there is no failed tests anymore, feel free to push your changes.

> Tips: add `--coverage` to make sure your code is 100% covered by the test. The minimum threshold is > 90%,
because why not.

Currently the "domain expert" of this project is [me](https://github.com/faultable), so, yeah, you got the point.

## Contributing

This works *happen* privately on our Basecamp, but I don't want to limit anyone. If you are interested in helping this project,
you can reach us **publicly** via [Perkumpulan evilfactorylabs](https://evlfctry.pro/perkumpulan), our Discourse-based
online forum.

Also I'm interested with [Spectrum](https://spectrum.chat/evilfactorylabs/alchemy), so I register one. Since you can login
into Spectrum using your GitHub account, probably that's good alternative for real-time & chat-style discussion.

## Maintainers

- [Fariz, evilfactorylabs](https://github.com/faultable)
- [Ari Pribadi, evilfactorylabs](https://github.com/chorzkie)

## License

```
MIT License

Copyright (c) 2020 evilfactorylabs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
