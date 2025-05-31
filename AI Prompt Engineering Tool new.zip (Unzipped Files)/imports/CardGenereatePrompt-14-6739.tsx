import svgPaths from "./svg-ycpo5iapo5";

function BackgroundImage42({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative rounded-md shrink-0 size-10">
      <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative size-10">
        {children}
      </div>
    </div>
  );
}

function BackgroundImage27({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative w-full">
        {children}
      </div>
    </div>
  );
}

function SvgBackgroundImage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-4">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 16 16"
      >
        <g id="SVG">{children}</g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative text-[#32343a] text-left text-nowrap">
        <div className="css-k2k9rc flex flex-col font-['Sora:Light',_sans-serif] font-light justify-center relative shrink-0 text-[24px] tracking-[-0.6px]">
          <p className="adjustLetterSpacing block leading-[24px] text-nowrap whitespace-pre">{`Generate & use your prompt`}</p>
        </div>
        <div className="css-gcwzvk font-['Sora:Regular',_sans-serif] font-normal relative shrink-0 text-[14px]">
          <p className="block leading-[20px] text-nowrap whitespace-pre">
            Optimize your prompt and copy it for use in your AI image generator
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
    <BackgroundImage27>
      <Heading3 />
    </BackgroundImage27>
  );
}

function Svg() {
  return (
    <SvgBackgroundImage>
      <path
        d="M10 2.66667V1.33333"
        id="Vector"
        stroke="var(--stroke-0, #FCFBF8)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
      <path
        d="M10 10.6667V9.33333"
        id="Vector_2"
        stroke="var(--stroke-0, #FCFBF8)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
      <path
        d="M5.33333 6H6.66667"
        id="Vector_3"
        stroke="var(--stroke-0, #FCFBF8)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
      <path
        d="M13.3333 6H14.6667"
        id="Vector_4"
        stroke="var(--stroke-0, #FCFBF8)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
      <path
        d={svgPaths.p31545880}
        id="Vector_5"
        stroke="var(--stroke-0, #FCFBF8)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
      <path
        d="M10 6H10.0067"
        id="Vector_6"
        stroke="var(--stroke-0, #FCFBF8)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
      <path
        d={svgPaths.p1f5b9800}
        id="Vector_7"
        stroke="var(--stroke-0, #FCFBF8)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
      <path
        d="M2 14L8 8"
        id="Vector_8"
        stroke="var(--stroke-0, #FCFBF8)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
      <path
        d={svgPaths.p173fc00}
        id="Vector_9"
        stroke="var(--stroke-0, #FCFBF8)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
    </SvgBackgroundImage>
  );
}

function Button() {
  return (
    <div
      className="bg-[#32343a] relative rounded-md shrink-0"
      data-name="Button"
      style={{
        backgroundImage:
          "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 205 52\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.7200000286102295\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(12.114 5.0375 7.3172 -8.5618 -8.1534 6.5)\\\'><stop stop-color=\\\'rgba(255,51,186,1)\\\' offset=\\\'0.19653\\\'/><stop stop-color=\\\'rgba(237,66,179,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>'), url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 205 52\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.8899999856948853\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(-1.1648 -5.2 -14.1 1.5368 89.688 59.312)\\\'><stop stop-color=\\\'rgba(173,18,245,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(183,38,227,1)\\\' offset=\\\'0.10122\\\'/><stop stop-color=\\\'rgba(193,57,209,1)\\\' offset=\\\'0.20244\\\'/><stop stop-color=\\\'rgba(213,95,172,1)\\\' offset=\\\'0.40488\\\'/><stop stop-color=\\\'rgba(233,134,135,1)\\\' offset=\\\'0.60732\\\'/><stop stop-color=\\\'rgba(253,172,98,1)\\\' offset=\\\'0.80976\\\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(85, 18, 138) 0%, rgb(85, 18, 138) 100%)",
      }}
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-4 items-center justify-center p-[16px] relative">
          <div className="css-o9cogz flex flex-col font-['Sora:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fcfbf8] text-[16px] text-center text-nowrap">
            <p className="block leading-[20px] whitespace-pre">
              Optimize Prompt
            </p>
          </div>
          <Svg />
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative w-full">
        <Button />
        <div className="css-gcwzvk font-['Sora:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#32343a] text-[14px] text-nowrap text-right">
          <p className="block leading-[14px] whitespace-pre">Reset</p>
        </div>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <SvgBackgroundImage>
      <path
        d={svgPaths.p216f800}
        id="Vector"
        stroke="var(--stroke-0, #32343A)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
      <path
        d={svgPaths.p13e4b3c0}
        id="Vector_2"
        stroke="var(--stroke-0, #32343A)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.33333"
      />
    </SvgBackgroundImage>
  );
}

function Button1() {
  return (
    <BackgroundImage42>
      <Svg1 />
    </BackgroundImage42>
  );
}

function Frame15() {
  return (
    <div className="[grid-area:1_/_5] relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-end p-0 relative size-full">
        <Button1 />
      </div>
    </div>
  );
}

function ResizeRightSvgrepoCom1() {
  return (
    <div
      className="relative shrink-0 size-[22px]"
      data-name="resize-right-svgrepo-com 1"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
      >
        <g id="resize-right-svgrepo-com 1">
          <path
            d={svgPaths.pab7fc00}
            fill="var(--fill-0, #32343A)"
            id="Subtract"
          />
        </g>
      </svg>
    </div>
  );
}

function CopyIcon() {
  return (
    <BackgroundImage42>
      <ResizeRightSvgrepoCom1 />
    </BackgroundImage42>
  );
}

function Frame16() {
  return (
    <div className="[grid-area:2_/_5] relative shrink-0">
      <div className="box-border content-stretch flex flex-row gap-2 items-end justify-end p-0 relative size-full">
        <CopyIcon />
      </div>
    </div>
  );
}

function Textarea() {
  return (
    <div
      className="basis-0 bg-[#ffffff] grow min-h-px min-w-px relative rounded-md shrink-0 w-full"
      data-name="Textarea"
    >
      <div className="overflow-auto relative size-full">
        <div className="box-border grid grid-cols-[repeat(5,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] p-[16px] relative size-full">
          <div className="[grid-area:1_/_1_/_span_2_/_span_4] css-gcwzvk font-['Sora:Light',_sans-serif] font-light leading-[0] relative shrink-0 text-[#32343a] text-[14px] text-left">
            <p className="block leading-[20px]">
              Your optimized prompt will appear here...
            </p>
          </div>
          <Frame15 />
          <Frame16 />
        </div>
      </div>
      <div className="absolute border border-solid border-zinc-400 inset-0 pointer-events-none rounded-md" />
    </div>
  );
}

function TextAreaLabel() {
  return (
    <div
      className="h-40 min-h-40 min-w-[280px] relative shrink-0 w-[846.4px]"
      data-name="Text area + Label"
    >
      <div className="box-border content-stretch flex flex-col gap-[13px] h-40 items-start justify-start p-0 relative w-[846.4px]">
        <div className="css-gcwzvk font-['Sora:Regular',_sans-serif] font-normal h-3.5 leading-[0] relative shrink-0 text-[#32343a] text-[14px] text-left w-full">
          <p className="block leading-[14px]">Optimized prompt</p>
        </div>
        <Textarea />
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <BackgroundImage27>
      <TextAreaLabel />
    </BackgroundImage27>
  );
}

function Card1() {
  return (
    <div
      className="bg-[#ffffff] relative rounded-[10px] shrink-0 w-[942.4px]"
      data-name="Card 1"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-8 items-start justify-start p-[48px] relative w-[942.4px]">
          <HeaderSubhead />
          <Frame12 />
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

export default function CardGenereatePrompt() {
  return (
    <div className="relative size-full" data-name="Card - Genereate Prompt">
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full">
        <Card1 />
      </div>
    </div>
  );
}