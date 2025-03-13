import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const content = (name: string) => `
<p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc.</p>
<br/>

<p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh. Donec posuere vulputate arcu. Quisque rutrum.</p>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
<br/>

<p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</p>

<br/>
<br/>
<br/>
<p><img alt="alt marketing" src="/assets/images/${name}/${name}_post_01.jpg" /></p>
<br/>
<br/>
<br/>

<h4>Curabitur suscipit suscipit tellus</h4>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
<br/>

<h4>Nullam accumsan lorem in</h4>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo.</p>

<br/>
<br/>
<br/>
<p><img alt="alt marketing" src="/assets/images/${name}/${name}_post_02.jpg" /></p>
<br/>
<br/>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
<br/>

<p>Pellentesque posuere. Phasellus a est. Suspendisse pulvinar, augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque velit pede quis nunc. Phasellus viverra nulla ut metus varius laoreet. Praesent egestas tristique nibh.</p>
<br/>

<p>Donec posuere vulputate arcu. Quisque rutrum. Curabitur vestibulum aliquam leo. Nam commodo suscipit quam. Vestibulum ullamcorper mauris at ligula.</p>
`;

const base = (index: number) => ({
  id: _mock.id(index),
  title: _mock.postTitle(index),
  description: _mock.description(index),
  category: 'Marketing',
  favorited: _mock.boolean(index),
  createdAt: _mock.time(index),
  duration: '8 minutes read',
  tags: _tags.slice(index + 1, index + 2),
  author: {
    name: _mock.fullName(index),
    role: _mock.role(index),
    avatarUrl: _mock.image.avatar(index),
    quotes: 'Member since Mar 15, 2021',
    about:
      'Integer tincidunt. Nullam dictum felis eu pede mollis pretium. Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, condimentum viverra felis nunc et lorem.',
  },
});

// ----------------------------------------------------------------------

export const _marketingPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('marketing'),
  coverUrl: _mock.image.marketing(index),
  heroUrl: `/assets/images/marketing/marketing_post_hero.jpg`,
}));

export const _travelPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('travel'),
  coverUrl: _mock.image.travel(index),
  heroUrl: `/assets/images/travel/travel_post_hero.jpg`,
}));

export const _careerPosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('career'),
  coverUrl: _mock.image.career(index),
  heroUrl: `/assets/images/career/career_post_hero.jpg`,
}));

export const _coursePosts = [...Array(12)].map((_, index) => ({
  ...base(index),
  content: content('course'),
  coverUrl: _mock.image.course(index),
  heroUrl: `/assets/images/course/course_post_hero.jpg`,
}));

export const blogPosts = [
  {
    id: "1",
    title: "The Rise of Web3: A Decentralized Future",
    heroUrl: "https://images.mirror-media.xyz/publication-images/WQkwZpEKsnnM-n-vJ8ss8.jpeg?height=1086&width=2172",
    tags: ["Web3", "Blockchain", "Decentralization"],
    createdAt: new Date("2024-05-01T00:00:00.000Z"),
    coverUrl: "https://images.mirror-media.xyz/publication-images/WQkwZpEKsnnM-n-vJ8ss8.jpeg?height=1086&width=2172",
    duration: "6 min read",
    favorited: false,
    description:
      "An in-depth look at Web3 and how it's shaping the future of the internet through decentralization and blockchain technology.",
    author: {
      name: "BlockForge Solutions",
      avatarUrl: "/logo/logo-single-light.png",
    },
    shareLinks: {
      facebook: "https://facebook.com/share?u=web3-rise",
      twitter: "https://twitter.com/share?u=web3-rise",
      linkedin: "https://linkedin.com/share?u=web3-rise",
    },
    content: `
      <h2>Introduction</h2>
      <p>Web3 is redefining the internet by shifting from centralized platforms to decentralized networks. But what does this mean for users and businesses?</p>

      <br />
      <h2>What is Web3?</h2>
      <p>Web3 is the next evolution of the internet, utilizing blockchain technology, smart contracts, and decentralized applications (dApps) to create a trustless ecosystem.</p>

      <h2>Key Features of Web3</h2>
      <ul>
        <li><strong>Decentralization:</strong> No single entity controls the network.</li>
        <li><strong>Blockchain Security:</strong> Transactions are immutable and transparent.</li>
        <li><strong>Cryptographic Payments:</strong> Built-in financial models using cryptocurrencies.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Web3 is still in its early stages, but its potential to disrupt industries is massive. The next step is mass adoption and user-friendly implementations.</p>
    `,
  },
  {
    id: "2",
    title: "Smart Contracts: The Backbone of Web3",
    heroUrl: "https://www.cryptojobs.com/blog/wp-content/uploads/2023/11/Smart-Contracts-101-Understanding-the-Backbone-of-Web3.jpg",
    tags: ["Web3", "Smart Contracts", "Ethereum"],
    createdAt: new Date("2024-05-10T00:00:00.000Z"),
    coverUrl: "https://www.cryptojobs.com/blog/wp-content/uploads/2023/11/Smart-Contracts-101-Understanding-the-Backbone-of-Web3.jpg",
    duration: "7 min read",
    favorited: false,
    description:
      "Smart contracts automate transactions and enforce agreements on the blockchain without intermediaries. Here’s how they work.",
    author: {
      name: "BlockForge Solutions",
      avatarUrl: "/logo/logo-single-light.png",
    },
    shareLinks: {
      facebook: "https://facebook.com/share?u=smart-contracts",
      twitter: "https://twitter.com/share?u=smart-contracts",
      linkedin: "https://linkedin.com/share?u=smart-contracts",
    },
    content: `
      <h2>Introduction</h2>
      <p>Smart contracts are self-executing agreements encoded on the blockchain. They eliminate the need for intermediaries, reducing costs and improving efficiency.</p>

      <h2>How Do Smart Contracts Work?</h2>
      <p>These contracts operate on conditional statements coded into them. When predefined conditions are met, actions are automatically executed.</p>

      <h2>Use Cases of Smart Contracts</h2>
      <ul>
        <li><strong>DeFi (Decentralized Finance):</strong> Automates lending, borrowing, and trading.</li>
        <li><strong>Supply Chain Management:</strong> Ensures transparency and traceability.</li>
        <li><strong>Legal Agreements:</strong> Reduces paperwork and speeds up execution.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Smart contracts are revolutionizing industries by making transactions trustless and efficient. Their adoption is expected to rise with further improvements in blockchain technology.</p>
    `,
  },
  {
    id: "3",
    title: "Decentralized Finance (DeFi): The Future of Banking",
    heroUrl: "https://cdn.prod.website-files.com/64ad09022ca618712b22c33f/6613f80af6d53f05529366e0_The%20Future%20of%20Banking%20for%20Web3%20Businesses%20Header-IMAGE.png",
    tags: ["Web3", "DeFi", "Finance"],
    createdAt: new Date("2024-05-20T00:00:00.000Z"),
    coverUrl: "https://cdn.prod.website-files.com/64ad09022ca618712b22c33f/6613f80af6d53f05529366e0_The%20Future%20of%20Banking%20for%20Web3%20Businesses%20Header-IMAGE.png",
    duration: "8 min read",
    favorited: false,
    description:
      "Decentralized Finance (DeFi) is transforming traditional financial systems by removing banks and middlemen from transactions.",
    author: {
      name: "BlockForge Solutions",
      avatarUrl: "/logo/logo-single-light.png",
    },
    shareLinks: {
      facebook: "https://facebook.com/share?u=defi-future",
      twitter: "https://twitter.com/share?u=defi-future",
      linkedin: "https://linkedin.com/share?u=defi-future",
    },
    content: `
      <h2>Introduction</h2>
      <p>DeFi eliminates the need for banks by offering financial services directly on the blockchain. But is it ready to replace traditional banking?</p>

      <h2>What is DeFi?</h2>
      <p>Decentralized Finance leverages smart contracts to provide financial services such as lending, borrowing, and trading without intermediaries.</p>

      <h2>Key Benefits of DeFi</h2>
      <ul>
        <li><strong>Accessibility:</strong> Anyone with internet access can use DeFi.</li>
        <li><strong>Transparency:</strong> Transactions are publicly verifiable.</li>
        <li><strong>High Yield:</strong> DeFi platforms often offer better returns than traditional banks.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>While DeFi presents exciting opportunities, risks such as smart contract vulnerabilities and regulatory uncertainty must be addressed.</p>
    `,
  },
  {
    id: "4",
    title: "NFTs: More Than Just Digital Art",
    heroUrl: "https://storage.dogasigorta.com/app-1433/blogs-images/117564058_nft_thumb1.jpeg",
    tags: ["Web3", "NFT", "Crypto"],
    createdAt: new Date("2024-05-25T00:00:00.000Z"),
    coverUrl: "https://storage.dogasigorta.com/app-1433/blogs-images/117564058_nft_thumb1.jpeg",
    duration: "5 min read",
    favorited: false,
    description:
      "NFTs are revolutionizing digital ownership beyond art, influencing gaming, real estate, and identity verification.",
    author: {
      name: "BlockForge Solutions",
      avatarUrl: "/logo/logo-single-light.png",
    },
    shareLinks: {
      facebook: "https://facebook.com/share?u=nft-revolution",
      twitter: "https://twitter.com/share?u=nft-revolution",
      linkedin: "https://linkedin.com/share?u=nft-revolution",
    },
    content: `
      <h2>Introduction</h2>
      <p>Non-Fungible Tokens (NFTs) have gained massive popularity, but their use cases go far beyond digital art and collectibles.</p>

      <h2>What Are NFTs?</h2>
      <p>NFTs are unique digital assets stored on a blockchain, ensuring ownership and scarcity.</p>

      <h2>Beyond Digital Art: Other NFT Applications</h2>
      <ul>
        <li><strong>Gaming:</strong> Players can own in-game assets that are tradeable.</li>
        <li><strong>Virtual Real Estate:</strong> Ownership of digital land in the metaverse.</li>
        <li><strong>Identity & Certification:</strong> Secure digital identity verification.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>NFTs are reshaping digital ownership, but their future depends on regulation, usability, and technological advancements.</p>
    `,
  },
];


