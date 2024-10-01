import React from "react";
import "@/assets/styles/framework/index.scss";

interface UBoxProps {
  /**
   * 높이
   */
  height?: number | string;

  /**
   * 비활성화 여부
   */
  disabled?: boolean;

  /**
   * 방향
   */
  direction?: "col" | "row";

  /**
   * 반응형 여부
   */
  responsive?: boolean;

  /**
   * 반응형시 기준 너비
   */
  responsiveBaseWidth?: number | string;

  children?: React.ReactNode;
}

const getCssUnit = (value: number | string): string => {
  return typeof value === "number" ? `${value}px` : value;
};

const UBox: React.FC<UBoxProps> = ({
  height = "100%",
  disabled = false,
  direction = "col",
  responsive = false,
  responsiveBaseWidth = 400,
  children,
}) => {
  const classes = () => {
    let returnClasses = "";
    if (disabled) {
      returnClasses += " u-layout-state-disabled";
    }
    if (responsive) {
      returnClasses += " u-box-responsive";
    }
    return returnClasses.trim();
  };

  const styles: React.CSSProperties = {
    display: "flex",
    flexGrow: 1,
    flexBasis: "0px",
    flexWrap: responsive ? "wrap" : "nowrap",
    flexDirection: direction === "row" ? "row" : "column",
    justifyContent: direction === "row" ? undefined : "flex-start",
    alignItems: direction === "row" ? undefined : "stretch",
    height: height !== 0 ? getCssUnit(height) : undefined,
    minHeight: height !== 0 ? getCssUnit(height) : undefined,
    ...(responsive && {
      "--u-box-responsive-base-width": getCssUnit(responsiveBaseWidth),
    }),
  };

  return (
    <div className={`u-box${classes() ? ` ${classes()}` : ""}`} style={styles}>
      {children}
    </div>
  );
};

export default UBox;
