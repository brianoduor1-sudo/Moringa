function Mapping() {
  const data = [
    {
      description:
        "Jump Rope, Tangle-Free Rapid Speed Jumping Rope Cable with Ball Bearings for Women, Men, and Kids, Adjustable Steel Jump Rope",
      amount: 1157,
      img: "https://m.media-amazon.com/images/I/71wm42EtoNL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      description:
        "BOOMIBOO Jump Rope, Adjustable Jump Ropes, Skipping Rope Tangle-Free Rapid Speed with Ball Bearings for Women",
      amount: 697,
      img: "https://m.media-amazon.com/images/I/71WhY22zw7L._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      description:
        "SPORTBIT Adjustable Jump Rope for Fitness and Exercise | Cardio, Boxing, and Weight Loss, Speed Rope",
      amount: 774,
      img: "https://m.media-amazon.com/images/I/71UzJ-BgpFL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      description:
        "JAMIEWIN Led Light Up Jump Rope for Kids Glow in the Dark Beaded Jump Rope | Adjustable, Colorful Soft Beaded Segmented",
      amount: 1679,
      img: "https://m.media-amazon.com/images/I/719M6JVne6L._AC_UL480_FMwebp_QL65_.jpg",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Amazon Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              background: "#fff",
            }}
          >
            <img
              src={item.img}
              alt="jump rope"
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />

            <p style={{ fontSize: "14px" }}>{item.description}</p>

            <h3>KSh {item.amount}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mapping;
