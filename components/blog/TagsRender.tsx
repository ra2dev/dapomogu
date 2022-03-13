const bgColors = {
  blue: "#bddcec",
  purple: "#d0d6ec",
  yellow: "#e2e3cc",
  gray: "#e3e2e0",
  default: "#d7e5ed",
  green: "#c4e3db",
  pink: "#dad9e7",
  brown: "#d5d8da",
  red: "#e3d9dd",
  orange: "#f9dec9",
};

const Tag = ({ name, color }) => {
  const resultBg = bgColors[color] ?? bgColors.default;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexShrink: 0,
        minWidth: 0,
        height: "18px",
        borderRadius: "3px",
        paddingLeft: "6px",
        paddingRight: "6px",
        fontSize: "14px",
        lineHeight: "120%",
        background: resultBg,
        color: "rgb(73, 41, 14)",
        margin: "0px 6px 6px 0px",
      }}
    >
      <div
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {name}
      </div>
    </div>
  );
};

export const TagsRender = ({ tags }) => {
  return (
    <div className="flex flex-wrap">
      {tags?.map((e) => (
        <Tag color={e.color} name={e.name} key={e.name} />
      ))}
    </div>
  );
};
