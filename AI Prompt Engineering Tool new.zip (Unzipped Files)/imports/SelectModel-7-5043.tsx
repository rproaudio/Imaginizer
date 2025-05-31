import svgPaths from "./svg-vowsyhmm4n";
import { imgGroup, imgGroup1 } from "./svg-dt86l";

function Buttonmodelselect1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative">
        {children}
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="box-border content-stretch flex flex-col h-full items-center justify-between p-0 relative">
        {children}
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
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

function Buttonmodelselect({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[100px] relative rounded-md shrink-0 w-32">
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col h-[100px] items-center justify-center p-[16px] relative w-32">
          {children}
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div
      className="absolute bottom-[22.461%] left-[16.992%] right-[16.602%] top-[22.412%]"
      data-name="Group"
    >
      <div className="absolute bottom-[-1.89%] left-[-1.569%] right-[-1.569%] top-[-1.89%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 34 28"
        >
          <g id="Group">
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
          </g>
        </svg>
      </div>
    </div>
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
    <div className="bg-[#ffffff] relative rounded-[120px] shrink-0 w-12">
      <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative w-12">
        <MidjourneyEmblem1 />
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <Wrapper1>
      <Frame3 />
      <div className="css-gcwzvk font-['Sora:Light',_sans-serif] font-light leading-[0] relative shrink-0 text-[#32343a] text-[14px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Midjourney</p>
      </div>
    </Wrapper1>
  );
}

function ButtonModelSelect() {
  return (
    <Buttonmodelselect>
      <Frame6 />
    </Buttonmodelselect>
  );
}

function ButtonModelSelect1() {
  return (
    <Buttonmodelselect1>
      <ButtonModelSelect />
    </Buttonmodelselect1>
  );
}

function Group1() {
  return (
    <div
      className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute bottom-[16.712%] left-[16.382%] mask-position-[-7.85242px,_0px_-7.97943px,_0px] mask-size-[47.9334px_47.9334px,_32.2312px_31.9435px] right-[16.377%] top-[16.647%]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}'), url('${imgGroup1}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 33 32"
      >
        <g id="Group">
          <path
            d={svgPaths.p31546400}
            fill="var(--fill-0, #1E1E1E)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
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
    <Wrapper1>
      <Frame4 />
      <div className="css-gcwzvk font-['Sora:Light',_sans-serif] font-light leading-[0] relative shrink-0 text-[#32343a] text-[14px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">ChatGPT</p>
      </div>
    </Wrapper1>
  );
}

function ButtonModelSelect2() {
  return (
    <Buttonmodelselect>
      <Frame7 />
    </Buttonmodelselect>
  );
}

function ButtonModelSelect3() {
  return (
    <Buttonmodelselect1>
      <ButtonModelSelect2 />
    </Buttonmodelselect1>
  );
}

function GeminiIconLogoBrandlogosNetB7H3U35Iu1() {
  return (
    <div
      className="absolute bottom-[10.417%] left-[12.5%] right-[10.417%] top-[12.5%]"
      data-name="gemini-icon-logo-brandlogos.net_b7h3u35iu 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 37 37"
      >
        <g
          clipPath="url(#clip0_7_4393)"
          id="gemini-icon-logo-brandlogos.net_b7h3u35iu 1"
        >
          <path
            d={svgPaths.p3fa8eb80}
            fill="var(--fill-0, #1E1E1E)"
            id="Vector"
          />
        </g>
        <defs>
          <clipPath id="clip0_7_4393">
            <rect fill="white" height="37" width="37" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#ffffff] overflow-clip relative rounded-[120px] shrink-0 size-12">
      <GeminiIconLogoBrandlogosNetB7H3U35Iu1 />
    </div>
  );
}

function Frame9() {
  return (
    <Wrapper1>
      <Frame5 />
      <div className="css-gcwzvk font-['Sora:Light',_sans-serif] font-light leading-[0] relative shrink-0 text-[#32343a] text-[14px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Gemini</p>
      </div>
    </Wrapper1>
  );
}

function ButtonModelSelect4() {
  return (
    <Buttonmodelselect>
      <Frame9 />
    </Buttonmodelselect>
  );
}

function ButtonModelSelect5() {
  return (
    <Buttonmodelselect1>
      <ButtonModelSelect4 />
    </Buttonmodelselect1>
  );
}

function Flux() {
  return (
    <div className="h-[26px] relative shrink-0 w-[34px]" data-name="Flux">
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

function Frame10() {
  return (
    <Wrapper>
      <Flux />
    </Wrapper>
  );
}

function Frame11() {
  return (
    <Wrapper1>
      <Frame10 />
      <div className="css-gcwzvk font-['Sora:Light',_sans-serif] font-light leading-[0] relative shrink-0 text-[#32343a] text-[14px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Flux</p>
      </div>
    </Wrapper1>
  );
}

function ButtonModelSelect6() {
  return (
    <Buttonmodelselect>
      <Frame11 />
    </Buttonmodelselect>
  );
}

function ButtonModelSelect7() {
  return (
    <Buttonmodelselect1>
      <ButtonModelSelect6 />
    </Buttonmodelselect1>
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
        <g clipPath="url(#clip0_7_4396)" id="svgexport-1 (4) 1">
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
          <clipPath id="clip0_7_4396">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <Wrapper>
      <Svgexport141 />
    </Wrapper>
  );
}

function Frame13() {
  return (
    <Wrapper1>
      <Frame12 />
      <div className="css-gcwzvk font-['Sora:Light',_sans-serif] font-light leading-[0] relative shrink-0 text-[#32343a] text-[14px] text-center text-nowrap">
        <p className="block leading-[21px] whitespace-pre">Ideogram</p>
      </div>
    </Wrapper1>
  );
}

function ButtonModelSelect8() {
  return (
    <Buttonmodelselect>
      <Frame13 />
    </Buttonmodelselect>
  );
}

function ButtonModelSelect9() {
  return (
    <Buttonmodelselect1>
      <ButtonModelSelect8 />
    </Buttonmodelselect1>
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

export default function SelectModel() {
  return (
    <div className="relative size-full" data-name="Select Model">
      <div className="absolute bottom-[88.942%] css-c2upci font-['Sora:Regular',_sans-serif] font-normal leading-[0] left-0 right-[40.698%] text-[#434852] text-[14px] text-left top-0">
        <p className="block leading-[14px]">Select model</p>
      </div>
      <Frame8 />
    </div>
  );
}