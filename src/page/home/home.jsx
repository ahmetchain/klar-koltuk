import { useRef } from "react";
import Header from "./components/header";
import KlarWhite from "../../png/klar-logo-beyaz.png";
import Klar from "../../png/klarwalpaper.webp";
import Repair from "../../png/koltukyeni.png";
import Sofa from "../../png/repair.jpg";
import AboutSection from "./components/aboutSection";
import Before_1 from "../../png/resim1.jpg";
import After_2 from "../../png/resim2.jpg";
import Before_3 from "../../png/resim3.jpg";
import After_4 from "../../png/resim4.jpg";
import ForYou from "../../png/foryou.webp";
import Tasarim from "../../png/tasarım.webp";
import Tasarim2 from "../../png/tasarım2.webp";
import FooterVideo from "../../video/footerstock.mp4";
import { FaInstagram } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import HeroSection from "./components/heroSection";
import SectionHeader from "./components/sectionHeader";
import FeatureSections from "./components/featureSections";
import BeforeAfterComparison from "./components/beforeAfterComparison";
import BannerSection from "./components/bannerSection";
import ParallaxBanner from "./components/parallaxBanner";

export default function Home() {
  const servicesRef = useRef(null);
  const scrollToRef = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="h-screen">
      <Header />
      <HeroSection Klar={Klar} KlarWhite={KlarWhite} scroll={scrollToRef} />
      <div className="px-20 flex flex-col gap-y-20">
        <AboutSection
          title={" Evinizin Konforunu Yeniden Tasarlıyoruz"}
          paragraph={
            " Klar Koltuk olarak, Koltuk Yenileme ve Döşeme, İskelet Yenileme, KoltukTamiri, Mobilya Boyama ve Kişiye Özel Tasarım hizmetlerimizle eski mobilyalarınızı hayalinizdeki tasarıma kavuşturuyor, evinizin tarzına en uygun çözümleri sunuyoruz. Hemen web sitemizi keşfedin, kaliteyi yakından deneyimleyin"
          }
        />
        <div ref={servicesRef}>
          <SectionHeader bg={true} text="HİZMETLERİMİZ" />
        </div>
        <FeatureSections
          Img={Sofa}
          Title={
            " Koltuklarınızı Modernleştirirken, Anılarınızı Özenle Koruyoruz."
          }
          Paragraph={
            " Yıpranmış ve eski koltuklarınızı alıp adeta yenilenmiş bir şekilde geri getiriyoruz. Bu sayede mobilyalarınızın ömrünü uzatırken, yeni alım masraflarından da kaçınmanızı sağlıyoruz. Uzman ekibimiz, ihtiyaçlarınıza en uygun çözümleri sunarak hem konforunuzu hem de bütçenizi korur."
          }
          Button={"İletişime Geçin"}
        />
        <FeatureSections
          Img={Repair}
          Title={" Eskimiş Koltuklarınızı Yenileyin, Yeni Alımlardan Kaçının!"}
          Paragraph={
            " Yıpranmış ve hasarlı mobilyalarınızı atmak yerine, sadece döşemelerini değiştirerek uzun yıllar kullanabilirsiniz. Usta ekibimiz, eski koltuklarınıza modern bir dokunuş kazandırarak yüksek maliyetlerden kurtulmanızı sağlar. Böylece sağlam iskeletlerinizi koruyarak,bütçenizden tasarruf edebilirsiniz."
          }
          Button={"İletişime Geçin"}
          Reverse={true}
          bg={true}
        />
      </div>
      <div className="px-20 mt-10 lg:mt-0 mb-10 lg:mb-0">
        <SectionHeader text="BEFORE AFTER" />
      </div>
      <BeforeAfterComparison
        before={Before_1}
        after={After_2}
        textb={"Sonrası "}
        texta={"Öncesi"}
      />
      <BeforeAfterComparison
        before={Before_3}
        after={After_4}
        textb={"Sonrası "}
        texta={"Öncesi"}
      />
      <BannerSection
        img={ForYou}
        title={"SİZİN İÇİN ÖZENLE TASARLANDI"}
        p={"Hayalinizdeki tasarımları gerçeğe dönüştürüyoruz."}
        p1={"Hayallerinize kavuşmak sadece bir adım uzağınızda"}
        p2={"Şimdi bizimle iletişime geçin ve hayalinize kavuşun"}
        button={"Şimdi Teklif Alın"}
      />
      <div className=" px-20 mt-10  flex flex-col gap-y-20">
        <AboutSection
          title={"Hayalinizdeki Tasarımı Gerçeğe Dönüştürüyoruz!"}
          paragraph={
            "İstediğiniz tasarımı hayata geçirmek, evinize ya da ofisinize en uygun koltukları tasarlamak için buradayız. Size özel, tamamen ihtiyaçlarınıza ve zevkinize göre tasarlanan koltuklarımızla salonlarınızda benzersiz bir şıklık ve konfor sunuyoruz. "
          }
        />
        <ParallaxBanner title={"KLARKOLTUK"} title2={"KLARKOLTUK"} />
        <FeatureSections
          Img={Tasarim}
          Title={"Siz İsteyin Biz Gerçekleştirelim"}
          Paragraph={
            " Sizin hayal gücünüz, bizim ustalığımızla buluşuyor. İster tamamen yeni bir tasarım, ister mevcut bir koltuğunuzun dönüşümü olsun, dilediğiniz her şeyi gerçeğe dönüştürüyoruz. Tarzınıza ve ihtiyaçlarınıza uygun, kişiye özel koltuk tasarımlarıyla yaşam alanlarınızı yeniliyoruz. Sadece hayal edin, gerisini bize bırakın!"
          }
          Button={"İletişime Geçin"}
        />
        <FeatureSections
          Img={Tasarim2}
          Title={" Evinize Uyum Sağlayan Koltuklar, Kendi Tasarımınızla"}
          Paragraph={
            " Evinizin atmosferine tam uyum sağlayacak koltuğu bulmak zor olabilir. Ancak, biz sizin için bu süreci kolaylaştırıyoruz. Standart kalıpların ötesine geçerek, yaşam alanınıza ve zevkinize en uygun koltuğu tasarlıyoruz. Artık hazır mobilya seçenekleriyle yetinmek zorunda değilsiniz. Daha fazlası için şimdi iletişime geçin!"
          }
          Button={"İletişime Geçin"}
          Reverse={true}
          bg={true}
        />
      </div>
      <footer className=" min-h-[450px] relative mt-20 bg-gray-900 text-white overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover "
          src={FooterVideo}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/70 to-gray-900"></div>

        <div className="relative z-10 container mx-auto px-4 py-28">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Klar Koltuk</h2>
              <p className="text-sm text-gray-300">
                Evinizin konforunu yeniden tasarlıyoruz. Kalite ve şıklık bizim
                işimiz.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Hızlı Bağlantılar</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://www.instagram.com/klarkoltuk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    Hizmetler
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/klarkoltuk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    Galeri
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/905333709349"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    İletişim
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">İletişim</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <FaPhone className="text-gray-400" />
                  <a
                    href="https://wa.me/905333709349"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    +90 533 370 93 49
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaEnvelope className="text-gray-400" />
                  <a
                    href="mailto:info@klarkoltuk.com"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    info@klarkoltuk.com
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-gray-400" />
                  <p>Seyhan, 643. Sk. no:27/2, 35380 Buca/İzmir</p>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Bizi Takip Edin</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/klarkoltuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-pink-500 transition duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://wa.me/905333709349"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-green-500 transition duration-300"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://www.google.com/maps/place/Klar+Koltuk/@38.3706212,27.1380217,17z/data=!3m1!4b1!4m6!3m5!1s0x14bbdf06ea95e47d:0x800635dd2fbefea5!8m2!3d38.370617!4d27.1405966!16s%2Fg%2F11lf93vdw3?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-blue-500 transition duration-300"
                >
                  <FaMapMarkerAlt />
                </a>
              </div>
              <a
                href="https://wa.me/905333709349"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-200 transition duration-300 text-sm"
              >
                Şimdi Teklif Alın
              </a>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Klar Koltuk. Tüm hakları
              saklıdır.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
