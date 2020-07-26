import { parse } from './parser';

const xml = `<?xml version="1.0" encoding="UTF-8"?><rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:anchor="https://anchor.fm/xmlns">
<channel>
    <title><![CDATA[My Brother, My Brother And Me]]></title>
    <description><![CDATA[Free advice from three of the world’s most qualified, most related experts: Justin, Travis and Griffin McElroy. For one-half to three-quarters of an hour every Monday, we tell people how to live their lives, because we’re obviously doing such a great job of it so far.]]></description>
    <link>https://anchor.fm/my-brother-my-brother-and-me</link>
    <image>
        <url>https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg</url>
        <title>My Brother, My Brother And Me</title>
        <link>https://anchor.fm/my-brother-my-brother-and-me</link>
    </image>
    <generator>Anchor Podcasts</generator>
    <lastBuildDate>Sun, 26 Jul 2020 19:12:17 GMT</lastBuildDate>
    <atom:link href="https://anchor.fm/s/2b7f0c44/podcast/rss" rel="self" type="application/rss+xml"/>
    <author><![CDATA[My Brother, My Brother And Me]]></author>
    <copyright><![CDATA[My Brother, My Brother And Me]]></copyright>
    <language><![CDATA[en]]></language>
    <atom:link rel="hub" href="https://pubsubhubbub.appspot.com/"/>
    <itunes:author>My Brother, My Brother And Me</itunes:author>
    <itunes:summary>Free advice from three of the world’s most qualified, most related experts: Justin, Travis and Griffin McElroy. For one-half to three-quarters of an hour every Monday, we tell people how to live their lives, because we’re obviously doing such a great job of it so far.</itunes:summary>
    <itunes:type>episodic</itunes:type>
    <itunes:owner>
        <itunes:name>My Brother, My Brother And Me</itunes:name>
        <itunes:email>podcasts60+2b7f0c44@anchor.fm</itunes:email>
    </itunes:owner>
    <itunes:explicit>No</itunes:explicit>
    <itunes:category text="Comedy"/>
    <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
    <item>
        <title><![CDATA[ MBMBaM 407 - Morton Shart's Joke School]]></title>
        <description><![CDATA[<p>&nbsp;MBMBaM 407 - Morton Shart's Joke School</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-407---Morton-Sharts-Joke-School-eh67kh</link>
        <guid isPermaLink="false">e78d8948-f198-44e4-9471-109fd0f635df</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 12:48:03 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17030225/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F9e82b1dbd0e37fc6e96af7b410fbe876.m4a" length="57885440" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;&amp;nbsp;MBMBaM 407 - Morton Shart&apos;s Joke School&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>3579</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
    <item>
        <title><![CDATA[MBMBaM 406- Face 2 Face- Sweet Dreams, Timothy]]></title>
        <description><![CDATA[<p>MBMBaM 406- Face 2 Face- Sweet Dreams, Timothy</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-406--Face-2-Face--Sweet-Dreams--Timothy-eh67ka</link>
        <guid isPermaLink="false">f720e548-c73d-4e29-a4dc-441dd547d94b</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 12:47:52 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17030218/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2Fb6a4d0db0e6b9dece605267de36b0542.m4a" length="75090574" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;MBMBaM 406- Face 2 Face- Sweet Dreams, Timothy&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>4643</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
    <item>
        <title><![CDATA[MBMBaM 405- Gumpy, Hey!]]></title>
        <description><![CDATA[<p>MBMBaM 405- Gumpy, Hey!</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-405--Gumpy--Hey-eh67k2</link>
        <guid isPermaLink="false">6fb58ac1-3b57-4d86-9ef6-b2eeaa590e78</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 12:47:41 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17030210/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F2ca14deb4cf0b199ee4ea07a2d4ae04f.m4a" length="55840441" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;MBMBaM 405- Gumpy, Hey!&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>3452</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
    <item>
        <title><![CDATA[MBMBaM 404- Michelangelo's Special Week]]></title>
        <description><![CDATA[<p>MBMBaM 404- Michelangelo's Special Week</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-404--Michelangelos-Special-Week-eh67jq</link>
        <guid isPermaLink="false">34dc4720-b6d0-4d49-8f28-b5390890ad8c</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 12:47:29 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17030202/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2Fb713249bd75fbc46e36fbacf1f1459e1.m4a" length="61915009" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;MBMBaM 404- Michelangelo&apos;s Special Week&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>3828</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
    <item>
        <title><![CDATA[MBMBaM 403- Hot Dog Wine]]></title>
        <description><![CDATA[<p>MBMBaM 403- Hot Dog Wine</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-403--Hot-Dog-Wine-eh67jj</link>
        <guid isPermaLink="false">64484efc-6a47-4f85-9609-b41d0e501849</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 12:47:17 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17030195/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F3f528b7e974f639811e70f7fc29b43ff.m4a" length="63195290" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;MBMBaM 403- Hot Dog Wine&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>3907</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
    <item>
        <title><![CDATA[MBMBaM 402- Face 2 Face- That Good Hot Dog Syrup]]></title>
        <description><![CDATA[<p>MBMBaM 402- Face 2 Face- That Good Hot Dog Syrup</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-402--Face-2-Face--That-Good-Hot-Dog-Syrup-eh67j8</link>
        <guid isPermaLink="false">e9eb6e1a-5029-4d5d-8bce-62bbcaa24f2d</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 12:47:04 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17030184/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F7fa9675a1b6b9b2e4b593d72cc01d89d.m4a" length="73940874" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;MBMBaM 402- Face 2 Face- That Good Hot Dog Syrup&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>4571</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
    <item>
        <title><![CDATA[MBMBaM 416- Face 2 Face- Haunted Doll Cinematic Universe]]></title>
        <description><![CDATA[<p>MBMBaM 416- Face 2 Face- Haunted Doll Cinematic Universe</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-416--Face-2-Face--Haunted-Doll-Cinematic-Universe-eh67it</link>
        <guid isPermaLink="false">7c2d8ad3-d7bd-4b56-8790-40f1c0dfd4ee</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 12:46:49 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17030173/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2Ffde72dddb04e0cb34d9020a0a9911954.m4a" length="72574272" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;MBMBaM 416- Face 2 Face- Haunted Doll Cinematic Universe&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>4487</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
    <item>
        <title><![CDATA[MBMBaM 415- My Very Cool Telescope!]]></title>
        <description><![CDATA[<p>MBMBaM 415- My Very Cool Telescope!</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-415--My-Very-Cool-Telescope-eh67ii</link>
        <guid isPermaLink="false">1d642269-d7a4-4344-95f9-3d70b7088b0d</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 12:46:36 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17030162/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F7008de81a9699c2ef52becea93c55013.m4a" length="57364379" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;MBMBaM 415- My Very Cool Telescope!&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>3546</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
    <item>
        <title><![CDATA[MBMBaM 414- Hogsplash]]></title>
        <description><![CDATA[<p>MBMBaM 414- Hogsplash</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-414--Hogsplash-eh67ie</link>
        <guid isPermaLink="false">fcbd586b-30da-4afa-b762-960b2998b494</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 12:46:24 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17030158/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F7247fcee74324d84eee3ce71d6a8a838.m4a" length="68279933" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;MBMBaM 414- Hogsplash&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>4221</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
    <item>
        <title><![CDATA[MBMBaM 413- Faster Car]]></title>
        <description><![CDATA[<p>MBMBaM 413- Faster Car</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-413--Faster-Car-eh67i7</link>
        <guid isPermaLink="false">0a902628-b8cc-4e34-982d-5d8e07751da1</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 12:46:12 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17030151/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2Feb56c4a84571f76b46c9dfb384282de4.m4a" length="57608061" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;MBMBaM 413- Faster Car&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>3562</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
    <item>
        <title><![CDATA[MBMBaM 412- Robocup]]></title>
        <description><![CDATA[<p>MBMBaM 412- Robocup</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-412--Robocup-eh67hj</link>
        <guid isPermaLink="false">444e4aa3-2d5c-4f72-92d1-c4723b3a4313</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 12:46:01 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17030131/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F7137506401d7854fe369241585cd325b.m4a" length="57788859" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;MBMBaM 412- Robocup&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>3573</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
    <item>
        <title><![CDATA[MBMBaM 411- Face 2 Face- Bon Voyage!]]></title>
        <description><![CDATA[<p>MBMBaM 411- Face 2 Face- Bon Voyage!</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-411--Face-2-Face--Bon-Voyage-eh67gd</link>
        <guid isPermaLink="false">06bbaf22-2e88-4232-9699-68b06c2924bd</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 12:45:48 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17030093/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F350f08b05a143fdba18e1cc09948eddd.m4a" length="72042996" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;MBMBaM 411- Face 2 Face- Bon Voyage!&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>4454</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
    <item>
        <title><![CDATA[MBMBaM 410- Game Man]]></title>
        <description><![CDATA[<p>MBMBaM 410- Game Man</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-410--Game-Man-eh67fp</link>
        <guid isPermaLink="false">60c07019-2236-4808-b4d6-ee11133aeda5</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 12:45:35 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17030073/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F2246a24275ebc6633ebac21ba4f92150.m4a" length="55504544" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;MBMBaM 410- Game Man&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>3431</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
    <item>
        <title><![CDATA[MBMBaM 409- Limp Bizkit Skank Boy]]></title>
        <description><![CDATA[<p>MBMBaM 409- Limp Bizkit Skank Boy</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-409--Limp-Bizkit-Skank-Boy-eh67fh</link>
        <guid isPermaLink="false">c590fa28-9a86-42d9-89a3-da0a436c55d2</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 12:45:20 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17030065/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F68efdb542b7dde10e189d42dc716702f.m4a" length="55457664" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;MBMBaM 409- Limp Bizkit Skank Boy&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>3429</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
    <item>
        <title><![CDATA[MBMBaM 408- Come and Get It!]]></title>
        <description><![CDATA[<p>MBMBaM 408- Come and Get It!</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-408--Come-and-Get-It-eh67f3</link>
        <guid isPermaLink="false">fa963eb0-7cdf-4c50-aeae-af544311866a</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 12:45:05 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17030051/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2Fbe00d83c555db63741b699f9f3b7ddd5.m4a" length="60059644" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;MBMBaM 408- Come and Get It!&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>3713</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
    <item>
        <title><![CDATA[MBMBaM 401- Max Cooljazz]]></title>
        <description><![CDATA[<p>MBMBaM 401- Max Cooljazz</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-401--Max-Cooljazz-eh65gg</link>
        <guid isPermaLink="false">7af93d49-1e4c-4172-98fc-563b4e2caa88</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 11:38:15 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17028048/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F1d7a3867804408800d71411a4c26dcab.m4a" length="67099352" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;MBMBaM 401- Max Cooljazz&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>4148</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
    <item>
        <title><![CDATA[MBMBaM 400- The Escape to Margaritaville Red Carpet Extravaganza]]></title>
        <description><![CDATA[<p>MBMBaM 400- The Escape to Margaritaville Red Carpet Extravaganza</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-400--The-Escape-to-Margaritaville-Red-Carpet-Extravaganza-eh65g6</link>
        <guid isPermaLink="false">aa4504a7-c961-4168-aa2b-e5d0a0a47804</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 11:37:59 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17028038/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F66ec8c7fca85a059bb5881b61b241ffc.m4a" length="83686862" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;MBMBaM 400- The Escape to Margaritaville Red Carpet Extravaganza&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>5174.0200</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
    <item>
        <title><![CDATA[MBMBaM 399- Stink Bar]]></title>
        <description><![CDATA[<p>MBMBaM 399- Stink Bar</p>

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  <a href="https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp">https://anchor.fm/app</a>
]]></description>
        <link>https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-399--Stink-Bar-eh65fp</link>
        <guid isPermaLink="false">a07c05eb-e877-4437-8b4e-5f519bdf76e5</guid>
        <dc:creator><![CDATA[My Brother, My Brother And Me]]></dc:creator>
        <pubDate>Fri, 24 Jul 2020 11:37:39 GMT</pubDate>
        <enclosure url="https://anchor.fm/s/2b7f0c44/podcast/play/17028025/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2Fdfbf73e360594ce181f0479d082bb0f4.m4a" length="62284301" type="audio/x-m4a"/>
        <itunes:summary>&lt;p&gt;MBMBaM 399- Stink Bar&lt;/p&gt;

--- 

This episode is sponsored by 
· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;
</itunes:summary>
        <itunes:explicit>No</itunes:explicit>
        <itunes:duration>3851</itunes:duration>
        <itunes:image href="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"/>
        <itunes:episodeType>full</itunes:episodeType>
    </item>
</channel>
</rss>`;

const expected = {
  "rss": {
    "@_xmlns:dc": "http://purl.org/dc/elements/1.1/",
    "@_xmlns:content": "http://purl.org/rss/1.0/modules/content/",
    "@_xmlns:atom": "http://www.w3.org/2005/Atom",
    "@_version": "2.0",
    "@_xmlns:itunes": "http://www.itunes.com/dtds/podcast-1.0.dtd",
    "@_xmlns:anchor": "https://anchor.fm/xmlns",
    "channel": {
      "title": "My Brother, My Brother And Me",
      "description": "Free advice from three of the world’s most qualified, most related experts: Justin, Travis and Griffin McElroy. For one-half to three-quarters of an hour every Monday, we tell people how to live their lives, because we’re obviously doing such a great job of it so far.",
      "link": "https://anchor.fm/my-brother-my-brother-and-me",
      "image": {
        "url": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg",
        "title": "My Brother, My Brother And Me",
        "link": "https://anchor.fm/my-brother-my-brother-and-me"
      },
      "generator": "Anchor Podcasts",
      "lastBuildDate": "Sun, 26 Jul 2020 19:12:17 GMT",
      "atom:link": [
        {
          "@_href": "https://anchor.fm/s/2b7f0c44/podcast/rss",
          "@_rel": "self",
          "@_type": "application/rss+xml"
        },
        {
          "@_rel": "hub",
          "@_href": "https://pubsubhubbub.appspot.com/"
        }
      ],
      "author": "My Brother, My Brother And Me",
      "copyright": "My Brother, My Brother And Me",
      "language": "en",
      "itunes:author": "My Brother, My Brother And Me",
      "itunes:summary": "Free advice from three of the world’s most qualified, most related experts: Justin, Travis and Griffin McElroy. For one-half to three-quarters of an hour every Monday, we tell people how to live their lives, because we’re obviously doing such a great job of it so far.",
      "itunes:type": "episodic",
      "itunes:owner": {
        "itunes:name": "My Brother, My Brother And Me",
        "itunes:email": "podcasts60+2b7f0c44@anchor.fm"
      },
      "itunes:explicit": "No",
      "itunes:category": {
        "@_text": "Comedy"
      },
      "itunes:image": {
        "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
      },
      "item": [
        {
          "title": " MBMBaM 407 - Morton Shart's Joke School",
          "description": "<p>&nbsp;MBMBaM 407 - Morton Shart's Joke School</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-407---Morton-Sharts-Joke-School-eh67kh",
          "guid": {
            "#text": "e78d8948-f198-44e4-9471-109fd0f635df",
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 12:48:03 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17030225/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F9e82b1dbd0e37fc6e96af7b410fbe876.m4a",
            "@_length": "57885440",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;&amp;nbsp;MBMBaM 407 - Morton Shart&apos;s Joke School&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 3579,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        },
        {
          "title": "MBMBaM 406- Face 2 Face- Sweet Dreams, Timothy",
          "description": "<p>MBMBaM 406- Face 2 Face- Sweet Dreams, Timothy</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-406--Face-2-Face--Sweet-Dreams--Timothy-eh67ka",
          "guid": {
            "#text": "f720e548-c73d-4e29-a4dc-441dd547d94b",
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 12:47:52 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17030218/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2Fb6a4d0db0e6b9dece605267de36b0542.m4a",
            "@_length": "75090574",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;MBMBaM 406- Face 2 Face- Sweet Dreams, Timothy&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 4643,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        },
        {
          "title": "MBMBaM 405- Gumpy, Hey!",
          "description": "<p>MBMBaM 405- Gumpy, Hey!</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-405--Gumpy--Hey-eh67k2",
          "guid": {
            "#text": 6,
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 12:47:41 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17030210/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F2ca14deb4cf0b199ee4ea07a2d4ae04f.m4a",
            "@_length": "55840441",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;MBMBaM 405- Gumpy, Hey!&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 3452,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        },
        {
          "title": "MBMBaM 404- Michelangelo's Special Week",
          "description": "<p>MBMBaM 404- Michelangelo's Special Week</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-404--Michelangelos-Special-Week-eh67jq",
          "guid": {
            "#text": 34,
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 12:47:29 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17030202/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2Fb713249bd75fbc46e36fbacf1f1459e1.m4a",
            "@_length": "61915009",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;MBMBaM 404- Michelangelo&apos;s Special Week&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 3828,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        },
        {
          "title": "MBMBaM 403- Hot Dog Wine",
          "description": "<p>MBMBaM 403- Hot Dog Wine</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-403--Hot-Dog-Wine-eh67jj",
          "guid": {
            "#text": 64484,
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 12:47:17 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17030195/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F3f528b7e974f639811e70f7fc29b43ff.m4a",
            "@_length": "63195290",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;MBMBaM 403- Hot Dog Wine&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 3907,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        },
        {
          "title": "MBMBaM 402- Face 2 Face- That Good Hot Dog Syrup",
          "description": "<p>MBMBaM 402- Face 2 Face- That Good Hot Dog Syrup</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-402--Face-2-Face--That-Good-Hot-Dog-Syrup-eh67j8",
          "guid": {
            "#text": "e9eb6e1a-5029-4d5d-8bce-62bbcaa24f2d",
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 12:47:04 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17030184/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F7fa9675a1b6b9b2e4b593d72cc01d89d.m4a",
            "@_length": "73940874",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;MBMBaM 402- Face 2 Face- That Good Hot Dog Syrup&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 4571,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        },
        {
          "title": "MBMBaM 416- Face 2 Face- Haunted Doll Cinematic Universe",
          "description": "<p>MBMBaM 416- Face 2 Face- Haunted Doll Cinematic Universe</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-416--Face-2-Face--Haunted-Doll-Cinematic-Universe-eh67it",
          "guid": {
            "#text": 7,
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 12:46:49 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17030173/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2Ffde72dddb04e0cb34d9020a0a9911954.m4a",
            "@_length": "72574272",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;MBMBaM 416- Face 2 Face- Haunted Doll Cinematic Universe&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 4487,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        },
        {
          "title": "MBMBaM 415- My Very Cool Telescope!",
          "description": "<p>MBMBaM 415- My Very Cool Telescope!</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-415--My-Very-Cool-Telescope-eh67ii",
          "guid": {
            "#text": 1,
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 12:46:36 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17030162/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F7008de81a9699c2ef52becea93c55013.m4a",
            "@_length": "57364379",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;MBMBaM 415- My Very Cool Telescope!&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 3546,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        },
        {
          "title": "MBMBaM 414- Hogsplash",
          "description": "<p>MBMBaM 414- Hogsplash</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-414--Hogsplash-eh67ie",
          "guid": {
            "#text": "fcbd586b-30da-4afa-b762-960b2998b494",
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 12:46:24 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17030158/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F7247fcee74324d84eee3ce71d6a8a838.m4a",
            "@_length": "68279933",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;MBMBaM 414- Hogsplash&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 4221,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        },
        {
          "title": "MBMBaM 413- Faster Car",
          "description": "<p>MBMBaM 413- Faster Car</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-413--Faster-Car-eh67i7",
          "guid": {
            "#text": 0,
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 12:46:12 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17030151/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2Feb56c4a84571f76b46c9dfb384282de4.m4a",
            "@_length": "57608061",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;MBMBaM 413- Faster Car&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 3562,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        },
        {
          "title": "MBMBaM 412- Robocup",
          "description": "<p>MBMBaM 412- Robocup</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-412--Robocup-eh67hj",
          "guid": {
            "#text": 444,
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 12:46:01 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17030131/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F7137506401d7854fe369241585cd325b.m4a",
            "@_length": "57788859",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;MBMBaM 412- Robocup&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 3573,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        },
        {
          "title": "MBMBaM 411- Face 2 Face- Bon Voyage!",
          "description": "<p>MBMBaM 411- Face 2 Face- Bon Voyage!</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-411--Face-2-Face--Bon-Voyage-eh67gd",
          "guid": {
            "#text": 6,
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 12:45:48 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17030093/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F350f08b05a143fdba18e1cc09948eddd.m4a",
            "@_length": "72042996",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;MBMBaM 411- Face 2 Face- Bon Voyage!&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 4454,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        },
        {
          "title": "MBMBaM 410- Game Man",
          "description": "<p>MBMBaM 410- Game Man</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-410--Game-Man-eh67fp",
          "guid": {
            "#text": 60,
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 12:45:35 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17030073/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F2246a24275ebc6633ebac21ba4f92150.m4a",
            "@_length": "55504544",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;MBMBaM 410- Game Man&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 3431,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        },
        {
          "title": "MBMBaM 409- Limp Bizkit Skank Boy",
          "description": "<p>MBMBaM 409- Limp Bizkit Skank Boy</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-409--Limp-Bizkit-Skank-Boy-eh67fh",
          "guid": {
            "#text": "c590fa28-9a86-42d9-89a3-da0a436c55d2",
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 12:45:20 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17030065/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F68efdb542b7dde10e189d42dc716702f.m4a",
            "@_length": "55457664",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;MBMBaM 409- Limp Bizkit Skank Boy&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 3429,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        },
        {
          "title": "MBMBaM 408- Come and Get It!",
          "description": "<p>MBMBaM 408- Come and Get It!</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-408--Come-and-Get-It-eh67f3",
          "guid": {
            "#text": "fa963eb0-7cdf-4c50-aeae-af544311866a",
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 12:45:05 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17030051/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2Fbe00d83c555db63741b699f9f3b7ddd5.m4a",
            "@_length": "60059644",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;MBMBaM 408- Come and Get It!&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 3713,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        },
        {
          "title": "MBMBaM 401- Max Cooljazz",
          "description": "<p>MBMBaM 401- Max Cooljazz</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-401--Max-Cooljazz-eh65gg",
          "guid": {
            "#text": 7,
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 11:38:15 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17028048/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F1d7a3867804408800d71411a4c26dcab.m4a",
            "@_length": "67099352",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;MBMBaM 401- Max Cooljazz&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 4148,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        },
        {
          "title": "MBMBaM 400- The Escape to Margaritaville Red Carpet Extravaganza",
          "description": "<p>MBMBaM 400- The Escape to Margaritaville Red Carpet Extravaganza</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-400--The-Escape-to-Margaritaville-Red-Carpet-Extravaganza-eh65g6",
          "guid": {
            "#text": "aa4504a7-c961-4168-aa2b-e5d0a0a47804",
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 11:37:59 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17028038/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2F66ec8c7fca85a059bb5881b61b241ffc.m4a",
            "@_length": "83686862",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;MBMBaM 400- The Escape to Margaritaville Red Carpet Extravaganza&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 5174.02,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        },
        {
          "title": "MBMBaM 399- Stink Bar",
          "description": "<p>MBMBaM 399- Stink Bar</p>\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  <a href=\"https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp\">https://anchor.fm/app</a>\n",
          "link": "https://anchor.fm/my-brother-my-brother-and-me/episodes/MBMBaM-399--Stink-Bar-eh65fp",
          "guid": {
            "#text": "a07c05eb-e877-4437-8b4e-5f519bdf76e5",
            "@_isPermaLink": "false"
          },
          "dc:creator": "My Brother, My Brother And Me",
          "pubDate": "Fri, 24 Jul 2020 11:37:39 GMT",
          "enclosure": {
            "@_url": "https://anchor.fm/s/2b7f0c44/podcast/play/17028025/sponsor/a2neumm/https%3A%2F%2Fd3ctxlq1ktw2nl.cloudfront.net%2Fstaging%2F2020-07-24%2Fdfbf73e360594ce181f0479d082bb0f4.m4a",
            "@_length": "62284301",
            "@_type": "audio/x-m4a"
          },
          "itunes:summary": "&lt;p&gt;MBMBaM 399- Stink Bar&lt;/p&gt;\n\n--- \n\nThis episode is sponsored by \n· Anchor: The easiest way to make a podcast.  &lt;a href=&quot;https://anchor.fm/s/2b7f0c44/podcast/sponsor/acugj9/url/https%3A%2F%2Fanchor.fm%2Fapp&quot;&gt;https://anchor.fm/app&lt;/a&gt;",
          "itunes:explicit": "No",
          "itunes:duration": 3851,
          "itunes:image": {
            "@_href": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/7197465/7197465-1594569151356-1cbc0b68da332.jpg"
          },
          "itunes:episodeType": "full"
        }
      ]
    }
  }
};

describe('Parser', () => {
  it('should create a js obj', () => {
    expect(parse(xml)).toEqual(expected);
  })
});