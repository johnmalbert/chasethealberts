import React from 'react';
import '../Blog.css';

const blogPosts = [
  {
    title: "That's a new one!",
    date: 'May 2026',
    category: 'Trail Notes',
    summary: 'Buckhorn Mountain, Marmot Pass, Olympics',
    photos: [
      { src: '/images/blog/bh2.jpg', alt: 'Buckhorn Mountain trail views' },
      { src: '/images/blog/bh3.jpg', alt: 'Buckhorn Mountain camp' },
      { src: '/images/blog/bh4.jpg', alt: 'Buckhorn Mountain ridgeline' },
    ],
    paragraphs: [
      'We spend most weekends in the summer in a tent away from everything. So much so, that it feels a little routine. Thursday afternoon, the backpacks and a pile of stuff hit the garage floor. One by one we check off items from the list, like the Jetboil, fuel, sleeping pads, a towel, spare quilt for the dog, etc. Even our departure time is almost always the same, just before 6 am. If I find the motivation, my next feature for this website will be a tool to mark off everything we need for our weekend gear checklist.',
      "You might think we've seen it all, done it all, hiked them all. Not even close! On this last hike, we saw or experienced a few things that I've never had happen before.",
      'A shoe-fetching dog.',
      "After tramping through snow to reach our campsite for the night on the ridge above Marmot Pass, I sat down on a ledge and took off my shoes to let the sun dry out the snow that had melted inside them. Maybe I was tired, but when I set my shoe down a few seconds later I was watching it tumble down the slope below me, until it stopped (fortunately) by a tree about 100' down. Tired, and down a shoe, I didn't want to scramble down to grab it. If you've been to our house, you know Sahale loves taking your shoe and parading it around. This was her time to shine, I sent her after my fallen shoe and she brought it all the way back!",
      'A bad dog',
      "The bugs were not too bad, and I'm thankful for that. During our afternoon nap, another hiker approached and Sahale reacted by jumping through the tent door. Not the open tent door, the closed mesh door, leaving a 2 foot hole behind her. Time to figure out how to patch a tent or decide if the REI Memorial Day sale is calling. We are working on the reactivity. She usually goes crazy when we are posted up in or around our tent and someone approaches. All other times on trail she doesn't care at all when someone else is around.",
      'A house cat',
      '"Is that a dog?" I asked as another backpacker passed me on trail. "No, it\'s a cat!" she said, referring to the furry friend resting on top of her backpack. Never seen that one before.',
      'Friendly neighbors',
      'Sometimes, being back at elevation leads to migraines for Erin. After praying about it, I got up the guts to ask the neighbors camped just up the ridge for us for some Ibuprofen, which they were more than happy to share. After the hike, we even got some Instagram messages from another couple who camped even higher up the ridge, saying they say us on their way up! Even in the solitude, we still enjoy having each other out there.'
    ]
  },
  {
    title: "Let's Count the Blow Downs",
    date: 'April 2026',
    category: 'Trail Notes',
    summary: 'Barclay Lake, Wild Sky Wilderness, WA',
    photos: [
      { src: '/images/blog/barclay.png', alt: 'Barclay Lake' },
      { src: '/images/blog/barclay2.png', alt: 'Barclay Lake' },
      { src: '/images/blog/barclay3.png', alt: 'Barclay Lake' },
    ],
    paragraphs: [
      "It's Barclay Lake. The day before, Erin jokingly warned \"Be sure to carb-load\"! This easy hike is the hike you suggest to all your non-hiking friends who want to feel like hikers. It's two miles, almost completely flat, and usually a zoo in the summertime.",
      'In mid-April, things are a bit different. A group of four church friends and I hit the trail with Sahale after work on a Thursday, having taken Friday off in advance. We met up at the Gold Bar Family Grocer around five, with light slipping away.',
      "The parking lot was empty, a great sign! Snow on the ground - not a great sign for Josiah, who was rocking Blundstones. C'mon, man! Not to worry, an hour later we were at the lake and setting up four tents.",
      'Fire:',
      "Aside from unplugging and fellowship, we all had one goal in mind for this trip: make fire. For the next three hours after camp was in order, that's what we attempted. Unfortunately, it was not to be. We sawed, chopped, and split wet wood, went through a whole Duraflame, and went to bed with cold, uncooked potatoes still wrapped in foil. I attempted sourdough bread over a MSR stove, but the result was something between raw biscuits and weird dumplings. The always-hungry Sahale got a little too close to my pan, and singed her eyebrows from the flames. This wasn't the first time.",
      "For what it's worth, Barclay Lake is beautiful. Many times we subconsciously think the harder the hike is, the better the views. Even though it's just a few minutes outside of Sultan, the views here are great. Just across the serene lake, Mt. Baring soars above, and you can't capture it all on a DSLR unless you've got a wide lens. This time of year, there were steady avalanches all day, which we observed safely from the far side of the lake.",
      "The next day, we were able to get a fire going in the sun, and spent the time prepping wood, laying out, drying tents, and enjoying a spring day in the mountains. I'll definitely be purchasing a Samurai Ichiban 13\" curved saw for myself after trying out the three different options the others had brought. The Japanese design was so superior to the rest. Because we had Saturday plans, Daniel and I packed up our tents, said goodbye to the others, and hit the trail back for the cars. For fun, we counted the blowdowns (fallen trees) along the trail that caused us to alter our path (over, under, around or through). There were 51."
    ]
  }
];

const Blog = () => {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero-copy">
          <span className="blog-eyebrow">Latest Blog</span>
          <h1>Trail thoughts</h1>
          <p>
            I majored in math, not English. Go easy, but just know I won't use AI to write these.
          </p>
        </div>
        <div className="blog-hero-card">
          <img src="/images/photo3.jpg" alt="Trail and mountains" />
        </div>
      </section>

      <section className="blog-posts-section">
        {blogPosts.map((post, index) => (
          <article className="blog-post-card" key={post.title}>
            <div className="blog-post-header">
              <div>
                <p className="blog-post-meta">{post.category} · {post.date}</p>
                <h2>{post.title}</h2>
              </div>
              <p className="blog-post-summary">{post.summary}</p>
            </div>

            <div className={`blog-photo-grid blog-photo-grid-${index + 1}`}>
              {post.photos.map((photo) => (
                <figure className="blog-photo-frame" key={photo.src}>
                  <img src={photo.src} alt={photo.alt} />
                </figure>
              ))}
            </div>

            <div className="blog-post-body">
              {post.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={`${post.title}-${paragraphIndex}`}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Blog;
