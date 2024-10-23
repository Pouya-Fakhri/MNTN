import Content from "./Content";
import Footer from "./Footer";

function ContentContainer() {
  const content = [
    {
      title: "GEt Started",
      head: "What level of  hiker are you?",
      body: "Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker? ",
      image: "../images/content-image-1.jpg",
    },
    {
      title: "Hiking Essentials",
      head: "Picking the right Hiking Gear!",
      body: "The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.",
      image: "../images/content-image-2.jpg",
    },
    {
      title: "where you go is the key",
      head: "Understand Your Map & Timing",
      body: "To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..",
      image: "../images/content-image-3.jpg",
    },
  ];

  return (
    <div className=" px-[100px] pb-[120px] mt-[-230px] flex flex-col gap-[200px]">
      <Content
        title={content[0].title}
        head={content[0].head}
        body={content[0].body}
        image={content[0].image}
      />
      <Content
        title={content[1].title}
        head={content[1].head}
        body={content[1].body}
        image={content[1].image}
      />
      <Content
        title={content[2].title}
        head={content[2].head}
        body={content[2].body}
        image={content[2].image}
      />
      <Footer />
    </div>
  );
}

export default ContentContainer;
