import React from "react";
import DogsPhotoSection from "../components/DogsPhotoSection"; // Assuming DogsPhotoSection is the component that handles images display

const OurDogs = () => {
  const dogPhotos = [
    {
      src: "/images/dogs/photo1.jpg", // Replace with actual image path
      title: "Rest, it's okay to do that.",
      subtitle:
        'Psalm 23:2 – "He makes me lie down in green pastures, he leads me beside quiet waters."',
    },
    {
      src: "/images/dogs/photo2.jpg", // Replace with actual image path
      title: "I desire your attention and I love spending time with you.",
      subtitle: 'James 4:8 – "Come near to God and he will come near to you."',
    },
    {
      src: "/images/dogs/photo3.jpg", // Replace with actual image path
      title: "I am still God.",
      subtitle:
        'Matthew 6:34 – "Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own."',
    },
    {
      src: "/images/dogs/photo4.jpg", // Replace with actual image path
      title: "I can communicate things to you without talking.",
      subtitle:
        'Psalm 19:1-2 – "The heavens declare the glory of God; the skies proclaim the work of his hands. Day after day they pour forth speech; night after night they reveal knowledge."',
    },
    {
      src: "/images/dogs/photo5.jpg", // Replace with actual image path
      title: "I provide all that you need, don't try to steal food.",
      subtitle: 'Matthew 6:26 – "Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they?"',
    },
    {
      src: "/images/dogs/photo6.jpg", // Replace with actual image path
      title: "Take time to rest.",
      subtitle:
        'Matthew 11:28 – "Come to me, all you who are weary and burdened, and I will give you rest."',
    },
    {
      src: "/images/dogs/photo7.jpg", // Replace with actual image path
      title:
        "Have peace, knowing that the next meal or walk is coming soon. I won't forget.",
      subtitle:
        'Matthew 6:31-32 – "So do not worry, saying, ‘What shall we eat?’ or ‘What shall we drink?’... your heavenly Father knows that you need them."',
    },
    {
      src: "/images/dogs/photo8.jpg", // Replace with actual image path
      title: "Life is better walking beside me.",
      subtitle:
        'Hebrews 13:8 – "Jesus Christ is the same yesterday and today and forever."',
    },
    {
      src: "/images/dogs/photo9.jpg", // Replace with actual image path
      title:
        "You are no longer on a leash of sin, so don't live as if you still are.",
      subtitle:
        'Galatians 5:1 – "It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery."',
    },
    {
      src: "/images/dogs/photo10.jpg", // Replace with actual image path
      title: "I will always bring you somewhere exciting.",
      subtitle:
        'Jeremiah 29:11 – "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."',
    },
    {
      src: "/images/dogs/photo11.jpg", // Replace with actual image path
      title: "Be still, and know that I am God.",
      subtitle: 'Psalm 46:10 – "Be still, and know that I am God."',
    },
    {
      src: "/images/dogs/photo12.jpg", // Replace with actual image path
      title:
        "When you really mess up, somehow I still forgive you and do so with compassion.",
      subtitle:
        'Psalm 103:12-13 – "As far as the east is from the west, so far has he removed our transgressions from us. As a father has compassion on his children, so the Lord has compassion on those who fear him."',
    },
    {
      src: "/images/dogs/photo13.jpg", // Replace with actual image path
      title: "The deceitfulness of riches is foreign to me.",
      subtitle:
        '1 Timothy 6:10 – "For the love of money is a root of all kinds of evil."',
    },
    {
      src: "/images/dogs/photo14.jpg", // Replace with actual image path
      title: "Don't work too hard.",
      subtitle:
        'Psalm 127:2 – "In vain you rise early and stay up late, toiling for food to eat—for he grants sleep to those he loves."',
    },
    {
      src: "/images/dogs/photo15.jpg", // Replace with actual image path
      title: "Just do one thing at a time.",
      subtitle:
        'Micah 6:8 – "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God."',
    },
  ];

  return (
    <div>
      <h1>Our Dogs</h1>
      <div className="lessons-section">
        <div className="dog-images-container">
          <img src="/images/sahale.jpg" alt="Sahale" className="dog-image" />
          <p>
            Having dogs has taught me more about God than I ever imagined.
            <br />
            Whether it's through our daily routines, hiking or backpacking,
            mealtimes, or any little unexpected thing they do, I find myself
            experiencing God more deeply when I'm alongside Sahale or Vesper.
            <br />
            <br />
            In 2022, we were shocked to learn that Vesper only had a few months
            to live due to severe kidney failure. She was only two years old.
            Those few months that followed were the most difficult,
            gut-wrenching times of our lives — if you've lost a dog before, you
            would certainly know.
            <br />
            <br />
            However, through all that, and even after we had to say goodbye, God
            reminded me that He is still God. We adopted Sahale only a week
            after Vesper passed, and gradually, the hole in our lives was filled
            by our red Labrador puppy. Sahale is now almost three, and the
            lessons we’ve learned together through prophetic words from God have
            made a profound impact on me.
            <br />
            <br />
            Here are a few of them!
          </p>
          <img src="/images/vesper.jpg" alt="Vesper" className="dog-image" />
        </div>
      </div>
      <DogsPhotoSection photos={dogPhotos} />{" "}
      {/* Use DogsPhotoSection to display photos, titles, and subtitles */}
    </div>
  );
};

export default OurDogs;
