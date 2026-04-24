import React from 'react';
import '../Blog.css';

const blogPosts = [
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