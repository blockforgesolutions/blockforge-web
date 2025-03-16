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
    slug: "the-rise-of-web3-a-decentralized-future",
    titleTr: "Web3'ün Yükselişi: Merkeziyetsiz Bir Gelecek",
    heroUrl: "https://images.mirror-media.xyz/publication-images/WQkwZpEKsnnM-n-vJ8ss8.jpeg?height=1086&width=2172",
    tags: ["Web3", "Blockchain", "Decentralization"],
    createdAt: new Date("2024-05-01T00:00:00.000Z"),
    coverUrl: "https://images.mirror-media.xyz/publication-images/WQkwZpEKsnnM-n-vJ8ss8.jpeg?height=1086&width=2172",
    duration: "6 min read",
    favorited: false,
    description: "An in-depth look at Web3 and how it's shaping the future of the internet through decentralization and blockchain technology.",
    descriptionTr: "Web3'ü derinlemesine inceleyen bu yazı, merkeziyetsizlik ve blockchain teknolojisiyle internetin geleceğini nasıl şekillendirdiğini ele alıyor.",
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
      <div class="blog-content">
        <h2>Introduction</h2>
        <p>Web3 is revolutionizing the way we think about the internet. By shifting from centralized platforms to decentralized networks, Web3 promises to create a more equitable, secure, and user-controlled digital ecosystem. But what exactly does this transformation mean, and how will it affect businesses, users, and society as a whole? In this post, we explore the key features of Web3, its current state, the potential impact on various industries, and what we can expect from this exciting new phase of the internet.</p>

        <br />

        <h2>What is Web3?</h2>
        <p>Web3 is the third era of the internet, following Web1 (static websites) and Web2 (interactive, user-generated content). While Web2 has led to the dominance of large centralized platforms such as Facebook, Google, and Amazon, Web3 aims to decentralize control, enabling individuals to interact and transact directly without intermediaries.</p>

        <p>At the heart of Web3 are technologies like blockchain, smart contracts, and decentralized applications (dApps). These technologies combine to create a "trustless" ecosystem—where transactions are transparent, secure, and immutable, and where users have full ownership and control over their data and digital assets. Web3 is powered by decentralized networks, removing the need for central authorities or intermediaries, which not only enhances privacy but also promotes a more open and democratic internet.</p>

        <br />

        <h2>Key Features of Web3</h2>
        <ul>
          <li><strong>Decentralization:</strong> Web3 eliminates the reliance on central servers or authorities. Rather than storing data on centralized servers, Web3 uses blockchain and distributed networks, where users themselves hold the keys to their data. This creates a peer-to-peer system where no single entity can control the flow of information or transactions.</li>
          <li><strong>Blockchain Security:</strong> One of Web3's core principles is security. Blockchain technology ensures that every transaction is recorded in an immutable ledger, which cannot be altered or tampered with. This creates a secure, transparent, and verifiable system that reduces fraud, data manipulation, and censorship.</li>
          <li><strong>Cryptographic Payments and DeFi:</strong> The introduction of cryptocurrencies enables users to make direct, peer-to-peer payments without relying on traditional financial institutions. This is the foundation of decentralized finance (DeFi), a revolutionary new way of managing and exchanging value through smart contracts and decentralized exchanges.</li>
          <li><strong>Ownership and Data Privacy:</strong> Web3 restores ownership to the individual. Rather than large corporations owning your personal data, Web3 allows you to control your identity, privacy, and digital assets. Through self-sovereign identities (SSI) and decentralized identifiers (DIDs), users can securely manage and share their personal information as they choose.</li>
          <li><strong>Interoperability:</strong> Unlike Web2’s siloed ecosystems, Web3 emphasizes the importance of interoperability. Users can seamlessly connect and interact across different platforms and applications, regardless of which blockchain or protocol they are built on, fostering a more integrated and fluid digital ecosystem.</li>
          <li><strong>Non-Fungible Tokens (NFTs):</strong> NFTs are unique digital assets that represent ownership of a specific item, such as art, music, or collectibles. Web3 allows users to create, buy, and sell these tokens directly, cutting out intermediaries like galleries or auction houses. NFTs also enable creators to receive royalties from resales, ensuring they continue to benefit as their work appreciates in value.</li>
        </ul>

        <br />

        <h2>How Web3 is Impacting Industries</h2>
        <p>Web3 is not just a theoretical concept—it is already making waves across various industries. Some of the key sectors impacted by Web3 include:</p>

        <ul>
          <li><strong>Finance:</strong> Web3 has paved the way for decentralized finance (DeFi), which includes lending, borrowing, trading, and staking digital assets without the need for banks or financial institutions. DeFi platforms are rapidly gaining traction by offering better rates, faster transactions, and increased accessibility to financial services.</li>
          <li><strong>Gaming:</strong> In the gaming industry, Web3 is enabling players to truly own their in-game assets through tokenization. Blockchain-based games allow players to trade, sell, or even earn cryptocurrency through gameplay, creating new economic opportunities within the gaming world.</li>
          <li><strong>Entertainment:</strong> Web3 offers creators more control over their work. Through NFTs, musicians, artists, and filmmakers can sell their creations directly to fans, bypassing intermediaries and retaining a larger portion of the profits. This also enhances transparency in royalties and intellectual property rights.</li>
          <li><strong>Supply Chain Management:</strong> Web3 technologies like blockchain can streamline supply chains by offering real-time, transparent tracking of goods from production to delivery. This can help reduce fraud, ensure product authenticity, and create more ethical supply chains, especially in industries like food and pharmaceuticals.</li>
          <li><strong>Healthcare:</strong> With Web3, patients can have more control over their medical data. Blockchain can store medical records securely and ensure that only authorized individuals have access to sensitive information, protecting privacy and reducing the risk of data breaches.</li>
        </ul>

        <br />

        <h2>Challenges Facing Web3</h2>
        <p>While Web3 presents incredible potential, it also faces several challenges that need to be addressed for mass adoption. Some of the key hurdles include:</p>

        <ul>
          <li><strong>Scalability:</strong> Many blockchain networks still struggle with scalability, meaning they can only handle a limited number of transactions per second. This is particularly problematic for Web3 applications that require fast, high-volume transactions.</li>
          <li><strong>Regulatory Uncertainty:</strong> Governments around the world are still working to develop regulations for Web3, particularly concerning cryptocurrency and decentralized finance. Clear and comprehensive regulations will be needed to foster innovation while protecting users.</li>
          <li><strong>User Experience:</strong> Despite its potential, Web3 is still complex and not user-friendly. Wallets, private keys, and gas fees are concepts that are difficult for many people to understand. Making Web3 more accessible will be key to its success.</li>
        </ul>

        <br />

        <h2>Conclusion</h2>
        <p>Web3 represents a radical departure from the current internet landscape. It promises to empower users, enhance security, and create new economic opportunities by decentralizing control and restoring ownership. While still in its early stages, Web3’s potential to transform industries and society is undeniable. As the technology matures and adoption grows, Web3 could become the foundation for a more equitable, transparent, and secure internet.</p>

        <p>The future of Web3 is exciting, and we are only just beginning to scratch the surface of what’s possible. With the right innovations, collaboration, and widespread adoption, Web3 could ultimately reshape the digital world and give rise to a new era of the internet.</p>
      </div>

    `,
    contentTr: `
      <div class="blog-content">
        <h2>Giriş</h2>
        <p>Web3, internetin nasıl çalıştığını yeniden şekillendiriyor. Merkezi platformlardan merkeziyetsiz ağlara geçiş yaparak, Web3, daha eşitlikçi, güvenli ve kullanıcıların kontrolünde bir dijital ekosistem yaratmayı vaat ediyor. Peki, bu dönüşüm tam olarak ne anlama geliyor ve işletmeler, kullanıcılar ve toplum için nasıl bir etki yaratacak? Bu yazıda, Web3'ün temel özelliklerini, mevcut durumunu, çeşitli sektörlerdeki potansiyel etkilerini ve bu heyecan verici yeni internet çağında neler bekleyebileceğimizi keşfedeceğiz.</p>

        <br />

        <h2>Web3 Nedir?</h2>
        <p>Web3, internetin üçüncü evrimidir ve Web1 (statik web siteleri) ve Web2 (etkileşimli, kullanıcı tarafından üretilen içerikler) sonrası gelmektedir. Web2, Facebook, Google ve Amazon gibi büyük merkezi platformların hakimiyetine yol açarken, Web3, merkeziyetçi kontrolü ortadan kaldırarak bireylerin, aracılara gerek duymadan doğrudan etkileşimde bulunmalarını sağlıyor.</p>

        <p>Web3'ün kalbinde, blockchain teknolojisi, akıllı sözleşmeler ve merkeziyetsiz uygulamalar (dApp'ler) yer alır. Bu teknolojiler, şeffaf, güvenli ve değiştirilemez işlem kayıtları sağlayarak "güvensiz" bir ekosistem yaratır ve kullanıcıların dijital varlıkları ve verileri üzerinde tam sahiplik ve kontrol sağlamasına olanak tanır. Web3, merkeziyet olmayan ağlar tarafından desteklenir ve bu da yalnızca daha fazla gizlilik sağlamakla kalmaz, aynı zamanda daha açık ve demokratik bir internetin temellerini atar.</p>

        <br />

        <h2>Web3'ün Temel Özellikleri</h2>
        <ul>
          <li><strong>Merkeziyetsizlik:</strong> Web3, merkezi sunuculara veya otoritelere olan bağımlılığı ortadan kaldırır. Veriler, merkezi sunucularda saklanmak yerine blockchain ve dağıtık ağlar kullanılarak depolanır. Bu, kullanıcıların verilerine sahip olduğu bir eşler arası (peer-to-peer) sistem yaratır. Böylece hiçbir tek bir varlık, bilgi akışını veya işlemleri kontrol edemez.</li>
          <li><strong>Blockchain Güvenliği:</strong> Web3'ün temel ilkelerinden biri güvenliktir. Blockchain teknolojisi, her işlemin değiştirilemez bir deftere kaydedilmesini sağlar. Bu, şeffaf, güvenli ve doğrulanabilir bir sistem yaratır ve dolandırıcılığı, veri manipülasyonunu ve sansürü azaltır.</li>
          <li><strong>Kriptografik Ödemeler ve DeFi:</strong> Kripto paraların kullanıma girmesiyle, kullanıcılar geleneksel finansal kurumlara gerek duymadan doğrudan, eşler arası ödemeler yapabilmektedir. Bu, merkeziyetsiz finans (DeFi) ekosisteminin temelini oluşturur ve kullanıcılar, akıllı sözleşmeler ve merkeziyetsiz borsalar aracılığıyla değerlerini yönetip takas edebilirler.</li>
          <li><strong>Sahiplik ve Veri Gizliliği:</strong> Web3, bireylere sahiplik hakkını geri kazandırır. Web2'de büyük şirketler kişisel verilerinize sahipken, Web3 sayesinde verilerinizi, kimliğinizi ve dijital varlıklarınızı kontrol edebilirsiniz. Kendine ait kimlikler (SSI) ve merkeziyetsiz tanımlayıcılar (DID'ler) aracılığıyla kullanıcılar, kişisel bilgilerini güvenli bir şekilde yönetebilir ve paylaşabilirler.</li>
          <li><strong>İnteroperabilite:</strong> Web2’nin kapalı ekosistemlerinden farklı olarak, Web3, uygulamalar arası etkileşim için önemlidir. Kullanıcılar, farklı platformlar ve uygulamalar arasında, hangi blockchain veya protokol üzerinde inşa edilmiş olursa olsun, sorunsuz bir şekilde bağlanabilir ve etkileşimde bulunabilirler. Bu, daha entegre ve akışkan bir dijital ekosistem yaratır.</li>
          <li><strong>Non-Fungible Tokens (NFT'ler):</strong> NFT'ler, bir öğenin, örneğin sanat, müzik veya koleksiyonlar gibi, sahipliğini temsil eden benzersiz dijital varlıklardır. Web3, kullanıcıların bu token'ları doğrudan yaratmalarını, almalarını ve satmalarını sağlar, böylece aracılara gerek kalmaz. NFT'ler ayrıca yaratıcıların eserin yeniden satılmasından telif ücreti almalarını sağlar, bu da değer kazandıkça sanatçılara sürekli bir gelir kaynağı yaratır.</li>
        </ul>

        <br />

        <h2>Web3'ün Sektörlere Etkisi</h2>
        <p>Web3, yalnızca teorik bir kavram değil; farklı endüstrilerde halihazırda etkisini gösteriyor. Web3’ün etkileşimde olduğu başlıca sektörler şunlardır:</p>

        <ul>
          <li><strong>Finans:</strong> Web3, merkeziyetsiz finans (DeFi) için yeni olanaklar sunuyor. Kullanıcılar, bankalar veya finansal kurumlar olmadan borç verme, borç alma, ticaret yapma ve dijital varlıklarını stake etme gibi işlemleri gerçekleştirebilir. DeFi platformları, daha iyi oranlar, daha hızlı işlemler ve finansal hizmetlere daha fazla erişim sunarak hızla ilgi görmektedir.</li>
          <li><strong>Oyun:</strong> Web3, oyunculara oyun içi varlıklarını tokenleştirerek gerçek sahiplik hakkı tanımaktadır. Blockchain tabanlı oyunlar, oyunculara dijital varlıklarını ticaret yapma, satma veya oyun oynayarak kripto para kazanma imkanı sunar, bu da oyun dünyasında yeni ekonomik fırsatlar yaratır.</li>
          <li><strong>Eğlence:</strong> Web3, yaratıcıların eserleri üzerinde daha fazla kontrol sahibi olmalarını sağlar. NFT'ler aracılığıyla müzisyenler, sanatçılar ve film yapımcıları, eserlerini doğrudan hayranlarına satabilir, aracılara gerek kalmaz ve gelirlerinin büyük bir kısmını kendileri alırlar. Bu aynı zamanda telif hakları ve fikri mülkiyet haklarında şeffaflık sağlar.</li>
          <li><strong>Tedarik Zinciri Yönetimi:</strong> Web3, blockchain teknolojisiyle tedarik zincirlerini şeffaf bir şekilde izlemeye olanak tanır. Ürünlerin üretimden teslimata kadar olan süreçlerini gerçek zamanlı olarak takip etmek, dolandırıcılığı önlemeye, ürünlerin doğruluğunu sağlamaya ve daha etik tedarik zincirleri oluşturulmasına yardımcı olabilir.</li>
          <li><strong>Sağlık:</strong> Web3 ile birlikte hastalar, sağlık verileri üzerinde daha fazla kontrol sahibi olabilir. Blockchain, tıbbi kayıtları güvenli bir şekilde saklar ve yalnızca yetkilendirilmiş kişilerin hassas bilgilere erişmesini sağlar, böylece gizlilik korunur ve veri ihlalleri riski azaltılır.</li>
        </ul>

        <br />

        <h2>Web3'ün Karşılaştığı Zorluklar</h2>
        <p>Web3, inanılmaz bir potansiyele sahip olsa da, kitlesel benimsenmesi için aşılması gereken bazı zorluklar vardır. Bunlardan bazıları şunlardır:</p>

        <ul>
          <li><strong>Ölçeklenebilirlik:</strong> Birçok blockchain ağı hâlâ ölçeklenebilirlik sorunları yaşıyor ve yalnızca sınırlı sayıda işlem gerçekleştirebiliyor. Bu, Web3 uygulamaları için hızla yüksek hacimli işlemler gerektiren durumlar için sorun olabilir.</li>
          <li><strong>Yasal Belirsizlik:</strong> Dünyadaki hükümetler, özellikle kripto para ve merkeziyetsiz finans (DeFi) ile ilgili Web3'ün düzenlenmesi konusunda hâlâ çalışmalar yapıyor. İnovasyonu teşvik ederken kullanıcıları koruyacak net ve kapsamlı düzenlemeler, Web3’ün gelişebilmesi için gereklidir.</li>
          <li><strong>Kullanıcı Deneyimi:</strong> Web3, potansiyeline rağmen hala karmaşık ve kullanıcı dostu değildir. Cüzdanlar, özel anahtarlar ve işlem ücretleri gibi kavramlar, birçok kullanıcı için anlaşılması zor olabiliyor. Web3’ü daha erişilebilir hale getirmek, bu teknolojinin başarısı için kritik olacaktır.</li>
        </ul>

        <br />

        <h2>Sonuç</h2>
        <p>Web3, mevcut internet yapısından köklü bir ayrılmayı temsil eder. Bu teknoloji, kullanıcıları güçlendirerek, güvenliği artırarak ve yeni ekonomik fırsatlar yaratarak merkeziyetsiz kontrol sağlamayı vaat ediyor. Henüz erken aşamalarında olsa da, Web3'ün sektörü ve toplumu dönüştürme potansiyeli yadsınamaz. Teknolojinin olgunlaşması ve benimsenmenin artmasıyla, Web3 nihayetinde daha eşitlikçi, şeffaf ve güvenli bir internetin temellerini atabilir.</p>

        <p>Web3'ün geleceği heyecan verici, ancak bu konuda daha yapılacak çok şey var. Doğru inovasyonlar, işbirlikleri ve kitlesel benimseme ile Web3, dijital dünyayı yeniden şekillendirerek internetin yeni bir çağını başlatabilir.</p>
      </div>

    `
  },
  {
    id: "2",
    title: "Smart Contracts: The Backbone of Web3",
    slug: "smart-contracts-the-backbone-of-web3",
    titleTr: "Akıllı Sözleşmeler: Web3'ün Belkemiği",
    heroUrl: "https://www.cryptojobs.com/blog/wp-content/uploads/2023/11/Smart-Contracts-101-Understanding-the-Backbone-of-Web3.jpg",
    tags: ["Web3", "Smart Contracts", "Ethereum"],
    createdAt: new Date("2024-05-10T00:00:00.000Z"),
    coverUrl: "https://www.cryptojobs.com/blog/wp-content/uploads/2023/11/Smart-Contracts-101-Understanding-the-Backbone-of-Web3.jpg",
    duration: "7 min read",
    favorited: false,
    description: "Smart contracts automate transactions and enforce agreements on the blockchain without intermediaries. Here’s how they work.",
    descriptionTr: "Akıllı sözleşmeler, işlemleri otomatikleştirir ve aracılara gerek duymadan blockchain üzerinde anlaşmaları uygular. İşte nasıl çalıştıkları.",
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
    contentTr: `
      <h2>Giriş</h2>
      <p>Akıllı sözleşmeler, blockchain üzerinde kodlanmış, kendiliğinden yürüyen anlaşmalardır. Aracıları ortadan kaldırarak maliyetleri düşürür ve verimliliği artırır.</p>

      <h2>Akıllı Sözleşmeler Nasıl Çalışır?</h2>
      <p>Bu sözleşmeler, içine kodlanmış koşullu ifadelerle çalışır. Belirli koşullar yerine getirildiğinde, eylemler otomatik olarak gerçekleştirilir.</p>

      <h2>Akıllı Sözleşmelerin Kullanım Alanları</h2>
      <ul>
        <li><strong>DeFi (Merkeziyetsiz Finans):</strong> Borç verme, borç alma ve ticaret işlemlerini otomatikleştirir.</li>
        <li><strong>Tedarik Zinciri Yönetimi:</strong> Şeffaflık ve izlenebilirlik sağlar.</li>
        <li><strong>Hukuki Anlaşmalar:</strong> Evrak işlerini azaltır ve yürütmeyi hızlandırır.</li>
      </ul>

      <h2>Sonuç</h2>
      <p>Akıllı sözleşmeler, işlemleri güvenilmez ve verimli hale getirerek endüstrileri devrim niteliğinde değiştiriyor. Blockchain teknolojisindeki ilerlemelerle benimsenme oranının artması bekleniyor.</p>
    `,
  },
  {
    id: "3",
    title: "Decentralized Finance (DeFi): The Future of Banking",
    slug: "decentralized-finance-defi-the-future-of-banking",
    titleTr: "Merkeziyetsiz Finans (DeFi): Bankacılığın Geleceği",
    heroUrl: "https://cdn.prod.website-files.com/64ad09022ca618712b22c33f/6613f80af6d53f05529366e0_The%20Future%20of%20Banking%20for%20Web3%20Businesses%20Header-IMAGE.png",
    tags: ["Web3", "DeFi", "Finance"],
    createdAt: new Date("2024-05-20T00:00:00.000Z"),
    coverUrl: "https://cdn.prod.website-files.com/64ad09022ca618712b22c33f/6613f80af6d53f05529366e0_The%20Future%20of%20Banking%20for%20Web3%20Businesses%20Header-IMAGE.png",
    duration: "8 min read",
    favorited: false,
    description: "Decentralized Finance (DeFi) is transforming traditional financial systems by removing banks and middlemen from transactions.",
    descriptionTr: "Merkeziyetsiz Finans (DeFi), bankaları ve aracılara gerek kalmadan işlemleri blockchain üzerinde gerçekleştiren geleneksel finansal sistemleri dönüştürüyor.",
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
    contentTr: `
      <h2>Giriş</h2>
      <p>DeFi, bankalara gerek kalmadan finansal hizmetleri doğrudan blockchain üzerinde sunar. Peki, geleneksel bankacılığı yerinden edebilecek kadar hazır mı?</p>

      <h2>DeFi Nedir?</h2>
      <p>Merkeziyetsiz Finans, akıllı sözleşmeler kullanarak, borç verme, borç alma ve ticaret gibi finansal hizmetleri aracıları ortadan kaldırarak sağlar.</p>

      <h2>DeFi'nin Temel Faydaları</h2>
      <ul>
        <li><strong>Erişilebilirlik:</strong> İnternet erişimi olan herkes DeFi'yi kullanabilir.</li>
        <li><strong>Şeffaflık:</strong> İşlemler herkese açık bir şekilde doğrulanabilir.</li>
        <li><strong>Yüksek Getiri:</strong> DeFi platformları, genellikle geleneksel bankalardan daha yüksek getiriler sunar.</li>
      </ul>

      <h2>Sonuç</h2>
      <p>DeFi heyecan verici fırsatlar sunsa da, akıllı sözleşme zafiyetleri ve düzenleyici belirsizlikler gibi risklerin ele alınması gerekiyor.</p>
    `,
  },
  {
    id: "4",
    title: "NFTs: More Than Just Digital Art",
    slug: "nfts-more-than-just-digital-art",
    titleTr: "NFT'ler: Sadece Dijital Sanattan Daha Fazlası",
    heroUrl: "https://storage.dogasigorta.com/app-1433/blogs-images/117564058_nft_thumb1.jpeg",
    tags: ["Web3", "NFT", "Crypto"],
    createdAt: new Date("2024-05-25T00:00:00.000Z"),
    coverUrl: "https://storage.dogasigorta.com/app-1433/blogs-images/117564058_nft_thumb1.jpeg",
    duration: "5 min read",
    favorited: false,
    description:
      "NFTs are revolutionizing digital ownership beyond art, influencing gaming, real estate, and identity verification.",
    descriptionTr: "NFT'ler, sanattan öte dijital sahipliği devrim niteliğinde değiştiriyor, oyun, gayrimenkul ve kimlik doğrulama gibi alanları etkiliyor.",
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
    contentTr: `
      <h2>Giriş</h2>
      <p>Non-Fungible Tokens (NFT'ler) büyük bir popülarite kazanmışken, kullanım alanları dijital sanat ve koleksiyonlardan çok daha fazlasını kapsıyor.</p>

      <h2>NFT'ler Nedir?</h2>
      <p>NFT'ler, sahiplik ve kıtlık garantisi sağlayan benzersiz dijital varlıklardır ve blockchain üzerine saklanırlar.</p>

      <h2>Dijital Sanatın Ötesinde: Diğer NFT Uygulamaları</h2>
      <ul>
        <li><strong>Oyun:</strong> Oyuncular, takas yapılabilir oyun içi varlıklara sahip olabilirler.</li>
        <li><strong>Sanal Gayrimenkul:</strong> Metaverse'deki dijital arazilerin sahipliği.</li>
        <li><strong>Kimlik ve Sertifikasyon:</strong> Güvenli dijital kimlik doğrulama.</li>
      </ul>

      <h2>Sonuç</h2>
      <p>NFT'ler dijital sahipliği yeniden şekillendiriyor, ancak geleceği düzenlemeler, kullanılabilirlik ve teknolojik ilerlemelere bağlıdır.</p>
    `,
  }

];


