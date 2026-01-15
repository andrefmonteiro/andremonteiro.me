---
title: Organizify
description: A dashboard to tidy up your Spotify library.
tech_stack: [Nuxt, TypeScript, Tailwind, Supabase]
tags: [spotify, music, playlists]
live_url: https://organizify-music.vercel.app
github_url: https://github.com/andrefmonteiro/organizify
---
I built a web application that helps you manage your Spotify library.  
The process didn't go as expected, which taught me a lot. This is its story.

## Defining a barebones MVP

In the beginning, my MVP was an app where users could permanently save their Release Radar and Discover Weekly playlists. I keep forgetting to check those weekly playlists before they disappear, so the idea was to solve my own problem.

The plan was simple: a user dashboard with two toggles that activate cron jobs.  
That's it. That's the bare minimum MVP I should focus on.

Admittedly, focusing on shipping a functional MVP before thinking of adding features was hard to do. I got caught up thinking about the ideal user journey and UX, wanting to craft those things ahead of time instead of deferring them for later. For example: what if a user logs in and then revokes the app's permissions on their Spotify account? Is this an edge case I need to implement right away, or can it wait until after shipping?

## Deciding a Tech Stack

- **Vue** for enjoyability (I've been learning it and enjoying it)
- **Nuxt** for productivity (staying in the same ecosystem instead of writing the backend with Java or Python).
- **Supabase**: PostgreSQL database with a good free tier and embedded auth.

### Wait, there's a module for that?

After spending a lot of time wrestling with Supabase documentation for their JS client, I discovered the `@nuxtjs/supabase` module.

Nuxt has a module (as usual) that makes it easier to use Supabase. This means:
- Much less code to write, no need to manually clean up tokens or protect routes
- Middleware for route protection follows a "fail-safe" security model where you explicitly opt pages out of protection rather than remembering to opt them in

Had I immediately searched for "Nuxt Supabase", instead of defaulting to reading the Supabase documentation for JS, and I could have saved a lot of time.

## Things will have to change

On April 2025, Spotify essentially [announced](https://developer.spotify.com/blog/2025-04-15-updating-the-criteria-for-web-api-extended-access) the death of new indie apps.  
Realizing that people couldn't simply open the app and try it out by themselves took a bit of a toll on me. The company whose public API made possible for creative projects such as [Festify](https://salty-beach-42139.herokuapp.com/), [How Bad Is Your Streaming Music?](https://pudding.cool/2021/10/judge-my-music/), and [Obscurify](https://www.obscurifymusic.com/login) to be done, is now closing its doors to more creativity.

Despite this frustration, I decided to keep going anyway—this would still be useful to me and my friends.

Soon enough, I was faced another obstacle: realizing the original feature of saving weekly playlists wasn't possible anymore. When I went to read the Spotify documentation again for the weekly playlists endpoints, I realized:

- Spotify had deprecated the `/browse/featured-playlists` endpoint that gives access to the user's featured playlists (Daily Mixes, Release Radar, Discover Weekly, etc.).
- There's no workaround through the `/me` endpoint or the `/search` endpoint.

I needed to build something else. Out of all the shower ideas which I noted as future features of Organizify, which one would now be my MVP feature?  
And then it hit me. A year ago, while at a music festival, a friend told me he struggled to organize his Liked Songs, wishing there was a way to automate it. Funny enough, I was meeting this same friend at this same festival in 4 days. What if I showed him that his problem could be solved?

**How to know what genre a song is?** Spotify doesn't give us genre data per song—it's per artist. We get genre data on the artist endpoint, and each artist has an array of genres. I decided to assume the first genre is most relevant (knowing there would be some misses—e.g., if a predominantly rock band makes a pop song, that song would be incorrectly categorized). I could live with these instances of incorrect categorization.

## Architecture
![Auth flow of the application](/images/portfolio/organizify/organizify-auth-flow.png "PKCE Flow")

![Business logic flow of the application](/images/portfolio/organizify/organizify-logic-flow.png "Server-side proxy pattern")

### Performance Optimizations

- **User data caching**: Spotify user ID and user name are exposed through the Supabase session, eliminating the need for redundant API calls to fetch basic user data in order to display a simple *"Hello, $username!"*.
- **Incremental processing**: Built a `user_processed_songs` table that tracks which tracks have already been organized. On subsequent syncs, the app only processes newly added liked songs rather than reprocessing the entire library. Always good to trim the volume of API calls, and it's helpful for songs that are very popular, which multiple users can have in common.
- **Batch processing**: API calls are batched efficiently—50 artists per request for genre detection (Spotify's limit), 100 tracks per playlist update—to stay within rate limits while maximizing throughput.

## UI Refinement

There wasn't much refinement needed. The goal was to have a clean, usable interface that provides feedback to the user when they use the main feature.

![User's dashboard with a successful toast that shows the organized genres](/images/portfolio/organizify/organizify-dashboard.png "Good design is less design?")

## What I've Learned

- **Scope creep is real:** shipping fundamental value is better than delaying (supposedly) ideal value. It takes discipline to stay on track.
- **Backend and API security patterns:** server-side proxy pattern, secure credential management, and token handling. Making diagrams helps.
- ***"Has anyone done this before?"* as a heuristic:** it will make the process of reading documentation much better.
- **Ideas are important, but don't fall in love with them:** you might just have to take a different route.