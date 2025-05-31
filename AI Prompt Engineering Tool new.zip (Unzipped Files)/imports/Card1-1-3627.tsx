import svgPaths from "./svg-l29880xtzv";
import clsx from "clsx";
import img20250214T221934796ZNwbKlPrvF6ZSleKyqou7EkfdPq8HXiMog1 from "figma:asset/0fb3a6288363b966a4f81ad86cd2f288e2a7c372.png";
import { imgGroup, imgGroup1 } from "./svg-bie0b";

function ButtonmodelselectBackgroundImage2({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage110({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#ffffff] relative rounded-[120px] shrink-0 w-12">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative w-12">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage95({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col h-full items-center justify-between p-0 relative">
        {children}
      </div>
    </div>
  );
}
type BackgroundImage80Props = {
  additionalClassNames?: string[];
};

function BackgroundImage80({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<BackgroundImage80Props>) {
  return (
    <div className={clsx(additionalClassNames)}>
      <div className="flex flex-col items-center justify-center relative size-full">
        {children}
      </div>
    </div>
  );
}
type ButtonmodelselectBackgroundImage1Props = {
  additionalClassNames?: string[];
};

function ButtonmodelselectBackgroundImage1({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<ButtonmodelselectBackgroundImage1Props>) {
  return (
    <BackgroundImage80
      additionalClassNames={[
        "relative rounded-md shrink-0 w-32",
        ...additionalClassNames,
      ]}
    >
      <div className="box-border content-stretch flex flex-col items-center justify-center p-[16px] relative w-32">
        {children}
      </div>
    </BackgroundImage80>
  );
}

function GroupBackgroundImage1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div
      style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}
      className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute bottom-[16.712%] left-[16.382%] mask-position-[-7.85242px,_0px_-7.97943px,_0px] mask-size-[47.9334px_47.9334px,_32.2312px_31.9435px] right-[16.377%] top-[16.647%]"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 33 32"
      >
        <g id="Group">{children}</g>
      </svg>
    </div>
  );
}
type ButtonmodelselectBackgroundImageProps = {
  additionalClassNames?: string[];
};

function ButtonmodelselectBackgroundImage({
  children,
  additionalClassNames = [],
}: React.PropsWithChildren<ButtonmodelselectBackgroundImageProps>) {
  return (
    <BackgroundImage80
      additionalClassNames={[
        "h-[100px] relative rounded-md shrink-0 w-32",
        ...additionalClassNames,
      ]}
    >
      <div className="box-border content-stretch flex flex-col h-[100px] items-center justify-center p-[16px] relative w-32">
        {children}
      </div>
    </BackgroundImage80>
  );
}

function BackgroundImage26({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#ffffff] relative rounded-[120px] shrink-0 size-12">
      <div className="flex flex-row items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-[3px] py-0 relative size-12">
          {children}
        </div>
      </div>
    </div>
  );
}

function GroupBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute bottom-[22.461%] left-[16.992%] right-[16.602%] top-[22.412%]">
      <div className="absolute bottom-[-1.89%] left-[-1.569%] right-[-1.569%] top-[-1.89%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 34 28"
        >
          <g id="Group">{children}</g>
        </svg>
      </div>
    </div>
  );
}
type BackgroundImageAndTextProps = {
  text: string;
};

function BackgroundImageAndText({ text }: BackgroundImageAndTextProps) {
  return (
    <BackgroundImage95>
      <BackgroundImage />
      <div className="css-gcwzvk font-['Sora:Light',_sans-serif] font-light leading-[0] relative shrink-0 text-[#32343a] text-[14px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">{text}</p>
      </div>
    </BackgroundImage95>
  );
}

function BackgroundImage() {
  return (
    <BackgroundImage26>
      <FluxBackgroundImage />
    </BackgroundImage26>
  );
}

function FluxBackgroundImage() {
  return (
    <div className="h-[26px] relative shrink-0 w-[34px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 34 26"
      >
        <g clipPath="url(#clip0_1_2599)" id="Flux">
          <path
            d={svgPaths.p2e1fd140}
            fill="var(--fill-0, #1E1E1E)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2599">
            <rect fill="white" height="26" width="34" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative text-[#32343a] text-left text-nowrap">
        <div className="css-k2k9rc flex flex-col font-['Sora:Light',_sans-serif] font-light justify-center relative shrink-0 text-[24px] tracking-[-0.6px]">
          <p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">
            Choose a model or trend
          </p>
        </div>
        <div className="css-gcwzvk font-['Sora:Regular',_sans-serif] font-normal relative shrink-0 text-[14px]">
          <p className="block leading-[20px] text-nowrap whitespace-pre">
            Start by describing what you want to create and selecting your
            target AI model
          </p>
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative w-full">
        <Frame17 />
      </div>
    </div>
  );
}

function HeaderSubhead() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header + Subhead">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        <Heading3 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <GroupBackgroundImage>
      <path
        d={svgPaths.p1f528800}
        id="waves"
        stroke="var(--stroke-0, #32343A)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={svgPaths.p2e065f00}
        id="hull"
        stroke="var(--stroke-0, #32343A)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={svgPaths.p2e746c00}
        id="front_sail"
        stroke="var(--stroke-0, #32343A)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={svgPaths.p20293d00}
        id="rear_sail"
        stroke="var(--stroke-0, #32343A)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </GroupBackgroundImage>
  );
}

function MidjourneyEmblem1() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-12"
      data-name="Midjourney_Emblem 1"
    >
      <Group />
    </div>
  );
}

function Frame3() {
  return (
    <BackgroundImage110>
      <MidjourneyEmblem1 />
    </BackgroundImage110>
  );
}

function Frame6() {
  return (
    <BackgroundImage95>
      <Frame3 />
      <div className="css-xoyyvm font-['Sora:Light',_sans-serif] font-light leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Midjourney</p>
      </div>
    </BackgroundImage95>
  );
}

function ButtonModelSelect() {
  return (
    <ButtonmodelselectBackgroundImage additionalClassNames={["bg-[#32343a]"]}>
      <Frame6 />
    </ButtonmodelselectBackgroundImage>
  );
}

function ButtonModelSelect1() {
  return (
    <ButtonmodelselectBackgroundImage2>
      <ButtonModelSelect />
    </ButtonmodelselectBackgroundImage2>
  );
}

function Group1() {
  return (
    <GroupBackgroundImage1>
      <path d={svgPaths.p31546400} fill="var(--fill-0, #32343A)" id="Vector" />
    </GroupBackgroundImage1>
  );
}

function ClipPathGroup() {
  return (
    <div
      className="absolute bottom-[16.712%] contents left-[16.382%] right-[16.377%] top-[16.647%]"
      data-name="Clip path group"
    >
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div
      className="absolute bottom-[16.712%] contents left-[16.382%] right-[16.377%] top-[16.647%]"
      data-name="Group"
    >
      <ClipPathGroup />
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div
      className="absolute bottom-[0.014%] left-[0.084%] right-[0.055%] top-[0.125%]"
      data-name="Clip path group"
    >
      <Group2 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#ffffff] overflow-clip relative rounded-[120px] shrink-0 size-12">
      <ClipPathGroup1 />
    </div>
  );
}

function Frame7() {
  return (
    <BackgroundImage95>
      <Frame4 />
      <div className="css-gcwzvk font-['Sora:Light',_sans-serif] font-light leading-[0] relative shrink-0 text-[#32343a] text-[14px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">DALL-E 3</p>
      </div>
    </BackgroundImage95>
  );
}

function ButtonModelSelect2() {
  return (
    <ButtonmodelselectBackgroundImage>
      <Frame7 />
    </ButtonmodelselectBackgroundImage>
  );
}

function ButtonModelSelect3() {
  return (
    <ButtonmodelselectBackgroundImage2>
      <ButtonModelSelect2 />
    </ButtonmodelselectBackgroundImage2>
  );
}

function ClipPathGroup2() {
  return (
    <div
      className="absolute bottom-[0.014%] left-[0.084%] right-[0.055%] top-[0.125%]"
      data-name="Clip path group"
    >
      <div
        className="absolute bg-[50%_50%] bg-cover bg-no-repeat bottom-[14.59%] left-[14.519%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-6.95947px_-6.94006px] mask-size-[47.9334px_47.9334px] right-[14.549%] top-[14.479%]"
        data-name="2025-02-14T22-19-34.796Z-NwbKlPrvF6zSleKYQOU7EkfdPQ8hXIMog 1"
        style={{
          backgroundImage: `url('${img20250214T221934796ZNwbKlPrvF6ZSleKyqou7EkfdPq8HXiMog1}')`,
          maskImage: `url('${imgGroup}')`,
        }}
      />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#ffffff] overflow-clip relative rounded-[120px] shrink-0 size-12">
      <ClipPathGroup2 />
    </div>
  );
}

function Frame9() {
  return (
    <BackgroundImage95>
      <Frame5 />
      <div className="css-gcwzvk font-['Sora:Light',_sans-serif] font-light leading-[0] relative shrink-0 text-[#32343a] text-[14px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Imagen</p>
      </div>
    </BackgroundImage95>
  );
}

function ButtonModelSelect4() {
  return (
    <ButtonmodelselectBackgroundImage>
      <Frame9 />
    </ButtonmodelselectBackgroundImage>
  );
}

function ButtonModelSelect5() {
  return (
    <ButtonmodelselectBackgroundImage2>
      <ButtonModelSelect4 />
    </ButtonmodelselectBackgroundImage2>
  );
}

function ButtonModelSelect6() {
  return (
    <ButtonmodelselectBackgroundImage>
      <BackgroundImageAndText text="Flux" />
    </ButtonmodelselectBackgroundImage>
  );
}

function ButtonModelSelect7() {
  return (
    <ButtonmodelselectBackgroundImage2>
      <ButtonModelSelect6 />
    </ButtonmodelselectBackgroundImage2>
  );
}

function Svgexport141() {
  return (
    <div
      className="relative shrink-0 size-[30px]"
      data-name="svgexport-1 (4) 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g clipPath="url(#clip0_1_2616)" id="svgexport-1 (4) 1">
          <path
            d={svgPaths.p2978b180}
            id="Vector"
            stroke="var(--stroke-0, #32343A)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.26667"
          />
          <path
            d={svgPaths.p103d1b80}
            id="Vector_2"
            stroke="var(--stroke-0, #32343A)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.26667"
          />
          <path
            d={svgPaths.p14cdf180}
            id="Vector_3"
            stroke="var(--stroke-0, #32343A)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.26667"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2616">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <BackgroundImage26>
      <Svgexport141 />
    </BackgroundImage26>
  );
}

function Frame13() {
  return (
    <BackgroundImage95>
      <Frame12 />
      <div className="css-gcwzvk font-['Sora:Light',_sans-serif] font-light leading-[0] relative shrink-0 text-[#32343a] text-[14px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Ideogram</p>
      </div>
    </BackgroundImage95>
  );
}

function ButtonModelSelect8() {
  return (
    <ButtonmodelselectBackgroundImage>
      <Frame13 />
    </ButtonmodelselectBackgroundImage>
  );
}

function ButtonModelSelect9() {
  return (
    <ButtonmodelselectBackgroundImage2>
      <ButtonModelSelect8 />
    </ButtonmodelselectBackgroundImage2>
  );
}

function Frame8() {
  return (
    <div className="absolute left-0 top-[26.6px]">
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative">
        <ButtonModelSelect1 />
        <ButtonModelSelect3 />
        <ButtonModelSelect5 />
        <ButtonModelSelect7 />
        <ButtonModelSelect9 />
      </div>
    </div>
  );
}

function SelectModel() {
  return (
    <div
      className="h-[126.6px] relative shrink-0 w-[688px]"
      data-name="Select Model"
    >
      <div className="absolute bottom-[88.942%] css-gcwzvk font-['Sora:Regular',_sans-serif] font-normal leading-[0] left-0 right-[40.698%] text-[#32343a] text-[14px] text-left top-0">
        <p className="block leading-[14px]">Select model</p>
      </div>
      <Frame8 />
    </div>
  );
}

function Group3() {
  return (
    <GroupBackgroundImage>
      <path
        d={svgPaths.p1f528800}
        id="waves"
        stroke="var(--stroke-0, black)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={svgPaths.p2e065f00}
        id="hull"
        stroke="var(--stroke-0, black)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={svgPaths.p2e746c00}
        id="front_sail"
        stroke="var(--stroke-0, black)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={svgPaths.p20293d00}
        id="rear_sail"
        stroke="var(--stroke-0, black)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </GroupBackgroundImage>
  );
}

function MidjourneyEmblem2() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-12"
      data-name="Midjourney_Emblem 1"
    >
      <Group3 />
    </div>
  );
}

function Frame14() {
  return (
    <BackgroundImage110>
      <MidjourneyEmblem2 />
    </BackgroundImage110>
  );
}

function Frame15() {
  return (
    <BackgroundImage95>
      <Frame14 />
      <div className="css-gcwzvk font-['Sora:Light',_sans-serif] font-light leading-[0] relative shrink-0 text-[#32343a] text-[14px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Midjourney</p>
      </div>
    </BackgroundImage95>
  );
}

function ButtonModelSelect10() {
  return (
    <ButtonmodelselectBackgroundImage1>
      <Frame15 />
    </ButtonmodelselectBackgroundImage1>
  );
}

function ButtonModelSelect11() {
  return (
    <ButtonmodelselectBackgroundImage2>
      <ButtonModelSelect10 />
    </ButtonmodelselectBackgroundImage2>
  );
}

function Group4() {
  return (
    <GroupBackgroundImage1>
      <path d={svgPaths.p31546400} fill="var(--fill-0, #1E1E1E)" id="Vector" />
    </GroupBackgroundImage1>
  );
}

function ClipPathGroup3() {
  return (
    <div
      className="absolute bottom-[16.712%] contents left-[16.382%] right-[16.377%] top-[16.647%]"
      data-name="Clip path group"
    >
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div
      className="absolute bottom-[16.712%] contents left-[16.382%] right-[16.377%] top-[16.647%]"
      data-name="Group"
    >
      <ClipPathGroup3 />
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div
      className="absolute bottom-[0.014%] left-[0.084%] right-[0.055%] top-[0.125%]"
      data-name="Clip path group"
    >
      <Group5 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#ffffff] overflow-clip relative rounded-[120px] shrink-0 size-12">
      <ClipPathGroup4 />
    </div>
  );
}

function Frame18() {
  return (
    <BackgroundImage95>
      <Frame16 />
      <div className="css-gcwzvk font-['Sora:Light',_sans-serif] font-light leading-[0] relative shrink-0 text-[#32343a] text-[14px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">DALL-E 3</p>
      </div>
    </BackgroundImage95>
  );
}

function ButtonModelSelect12() {
  return (
    <ButtonmodelselectBackgroundImage1>
      <Frame18 />
    </ButtonmodelselectBackgroundImage1>
  );
}

function ButtonModelSelect13() {
  return (
    <ButtonmodelselectBackgroundImage2>
      <ButtonModelSelect12 />
    </ButtonmodelselectBackgroundImage2>
  );
}

function Frame19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col h-full items-center justify-start p-0 relative">
        <div className="css-xoyyvm font-['Sora:Light',_sans-serif] font-light leading-[0] relative shrink-0 text-[#ffffff] text-[14px] text-center text-nowrap">
          <p className="block leading-[21px] whitespace-pre">Anime</p>
        </div>
      </div>
    </div>
  );
}

function ButtonModelSelect14() {
  return (
    <ButtonmodelselectBackgroundImage1 additionalClassNames={["bg-[#32343a]"]}>
      <Frame19 />
    </ButtonmodelselectBackgroundImage1>
  );
}

function ButtonModelSelect15() {
  return (
    <ButtonmodelselectBackgroundImage2>
      <ButtonModelSelect14 />
    </ButtonmodelselectBackgroundImage2>
  );
}

function ButtonModelSelect16() {
  return (
    <ButtonmodelselectBackgroundImage1>
      <BackgroundImageAndText text="Flux" />
    </ButtonmodelselectBackgroundImage1>
  );
}

function ButtonModelSelect17() {
  return (
    <ButtonmodelselectBackgroundImage2>
      <ButtonModelSelect16 />
    </ButtonmodelselectBackgroundImage2>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row gap-3 items-start justify-start p-0 relative w-full">
        <ButtonModelSelect11 />
        <ButtonModelSelect13 />
        <ButtonModelSelect15 />
        <ButtonModelSelect17 />
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 w-[688px]" data-name="Component 2">
      <div className="box-border content-stretch flex flex-col gap-[13px] items-start justify-start p-0 relative w-[688px]">
        <div className="css-gcwzvk font-['Sora:Regular',_sans-serif] font-normal h-3.5 leading-[0] relative shrink-0 text-[#32343a] text-[14px] text-left w-full">
          <p className="block leading-[14px]">Select trend (optional)</p>
        </div>
        <Frame22 />
      </div>
    </div>
  );
}

export default function Card1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[10px] size-full"
      data-name="Card 1"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-[48px] relative size-full">
          <HeaderSubhead />
          <SelectModel />
          <Component2 />
        </div>
      </div>
    </div>
  );
}