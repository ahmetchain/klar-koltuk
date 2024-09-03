import React from "react";
import Header from "./components/header";
import KlarWhite from "../../png/klar-logo-beyaz.png";
import Klar from "../../png/klarwalpaper.jpeg";
import Repair from "../../png/koltukyeni.png";
import Sofa from "../../png/repair.jpg";
import AboutSection from "./components/aboutSection";
import Before_1 from "../../png/resim1.jpg";
import After_2 from "../../png/resim2.jpg";
import Before_3 from "../../png/resim3.jpg";
import After_4 from "../../png/resim4.jpg";
import ForYou from "../../png/foryou.jpeg";
import Tasarim from "../../png/tasarım.jpeg";
import Tasarim2 from "../../png/tasarım2.jpeg";
import FooterVideo from "../../video/footerstock.mp4";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import HeroSection from "./components/heroSection";
import SectionHeader from "./components/sectionHeader";
import FeatureSections from "./components/featureSections";
import BeforeAfterComparison from "./components/beforeAfterComparison";
import BannerSection from "./components/bannerSection";
import ParallaxBanner from "./components/parallaxBanner";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <HeroSection Klar={Klar} KlarWhite={KlarWhite} />
      <div className="px-20 flex flex-col gap-y-20">
        <AboutSection
          title={" Evinizin Konforunu Yeniden Tasarlıyoruz"}
          paragraph={
            " Klar Koltuk olarak, Koltuk Yenileme ve Döşeme, İskelet Yenileme, KoltukTamiri, Mobilya Boyama ve Kişiye Özel Tasarım hizmetlerimizle eski mobilyalarınızı hayalinizdeki tasarıma kavuşturuyor, evinizin tarzına en uygun çözümleri sunuyoruz. Hemen web sitemizi keşfedin, kaliteyi yakından deneyimleyin"
          }
        />
        <SectionHeader bg={true} text="HİZMETLERİMİZ" />
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
        textb={"Solmuş ve Kirli Halde"}
        texta={"Yenilenmiş ve sıfır tarzında"}
      />
      <BeforeAfterComparison
        before={Before_3}
        after={After_4}
        textb={"Solmuş ve Kirli Halde"}
        texta={"Yenilenmiş ve sıfır tarzında"}
      />
      <BannerSection
        img={ForYou}
        title={"SİZİN İÇİN ÖZENLE TASARLANDI"}
        p={"Hayalinizdeki tasarımları gerçeğe dönüştürüyoruz."}
        p1={"Haylleriniz kavuşmak sadece bir adım uzağınızda"}
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
      <footer className="relative mt-20 h-[800px]  ">
        <video
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-cover rounded-t-xl"
          src={FooterVideo}
          autoPlay
          loop
          muted
        />
        <div className="absolute  mx-auto inset-0 bg-gradient-to-t from-black/35 to-transparent rounded-lg"></div>
        <div className=" absolute z-20 flex flex-col text-white items-center justify-center w-full h-full gap-y-16 lg:gap-y-20">
          <h1 className="text-xl w-[300px] sm:w-auto text-center sm:text-2xl lg:text-4xl font-semibold">
            Hayalinizdeki Tasarım Parmaklarınızın Ucunda
          </h1>
          <a
            href="https://wa.me/905333709349"
            target="_blank"
            className="p-2 select-none cursor-pointer sm:p-3 lg:p-5 border-2 border-white sm:text-lg font-semibold hover:bg-white hover:text-black duration-300 "
          >
            Şimdi teklif alın
          </a>
        </div>
        <div className=" absolute h-[80px] bg-black w-full bottom-0 flex justify-center ">
          <div className="flex items-center z-50 sm:text-base text-xs gap-x-4 sm:gap-x-10 text-white">
            <a href="#">Klar-Koltuk</a>
            <a href="#">Hizmetler</a>
            <a
              href="https://www.google.com/maps/place/Klar+Koltuk/@38.3706212,27.1380217,17z/data=!3m1!4b1!4m6!3m5!1s0x14bbdf06ea95e47d:0x800635dd2fbefea5!8m2!3d38.370617!4d27.1405966!16s%2Fg%2F11lf93vdw3?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              Konum
            </a>
            <a href="https://wa.me/905333709349" target="_blank">
              İletişim
            </a>
            <a className="flex items-center cursor-pointer select-none gap-x-3 sm:gap-x-5">
              <a href="https://www.instagram.com/klarkoltuk/" target="_blank">
                <FaInstagram className="h-5" />
              </a>
              <a href="https://wa.me/905333709349" target="_blank">
                <FaWhatsapp className="h-5" />
              </a>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
