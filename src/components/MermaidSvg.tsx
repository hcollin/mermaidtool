import mermaid from "mermaid";
import { useState, useEffect } from "react";
import { CiniaColors } from "../data/colors";

interface MermaidSvgProps {
    code: string;
    width?: string;
    height?: string;
}

mermaid.initialize({
    startOnLoad: true,
    theme: "base",
    themeVariables: {
        fontFamily: "Archivo, Arial",
        background: CiniaColors.white,
        primaryColor: CiniaColors.gray,
        primaryTextColor: CiniaColors.blue,
        // secondaryColor: CiniaColors.blue,
        textColor: CiniaColors.blue,
        mainBkg: CiniaColors.gray,
        lineColor: CiniaColors.darkGray,
        fontSize: "20px",
        xyChart: {
            plotColorPalette: `${CiniaColors.gray}, ${CiniaColors.pie1}, ${CiniaColors.pie2}, ${CiniaColors.pie3}, ${CiniaColors.pie4}`,
            xAxisTickColor: CiniaColors.black,    
            yAxisTickColor: CiniaColors.black,    
        }
        
        
    },
    gantt: {
        titleTopMargin: 25,
        topPadding: 50,
        barHeight: 30,
        barGap: 8,
        leftPadding: 175,
        fontSize: 20,
        sectionFontSize: 10,
        numberSectionStyles: 2,
        gridLineStartPadding: 50,
        topAxis: true,
        weekday: "monday",

    },
    xyChart: {
        
    }
    
});

const MermaidSvg = (props: MermaidSvgProps) => {
    const [svgImg, setSvgImg] = useState<null | string>(null);

    useEffect(() => {
        async function renderGraph() {
            const data = await mermaid.render("graph", props.code);
            console.log(data);
            setSvgImg(data.svg);
        }

        renderGraph();
    }, [props.code]);

    if (svgImg === null) {
        return null;
    }

    return (
        <img
            src={`data:image/svg+xml;utf8,${encodeURIComponent(svgImg)}`}
            width={props.width || "100%"}
            height={props.height || "100%"}
        />
    );
};

export default MermaidSvg;
