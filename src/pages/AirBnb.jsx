import { useEffect, useState } from "react";
import Media from "../components/Media";
import facebook from "../assets/svg/facebook.svg";
import twitter from "../assets/svg/twitter.svg";
import instagram from "../assets/svg/instagram.svg";
import Navbar from "../components/Navbar";

const AirBnb = () => {
  const [init, setInit] = useState(false);
  const [items, setItems] = useState([]);
  const [footerTabIdx, setFooterTabIdx] = useState(0);

  useEffect(() => {
    if (!init) {
      setInit(true);
    }
  }, []);

  useEffect(() => {
    if (init) {
      setTimeout(
        () =>
          setItems([
            {
              id: 1,
              media: ["/thumbnails/1.webp", "/thumbnails/2.webp"],
              isFavourite: true,
              title: "Johor Bahru, Malaysia",
              rating: 5.0,
              description: "On the beach",
              date: "24-29 Mar",
              price: 91,
            },
            {
              id: 2,
              media: ["/thumbnails/2.webp", "/thumbnails/3.webp"],
              isFavourite: true,
              title: "Melaka, Malaysia",
              rating: 4.96,
              description: "On the beach",
              date: "26-31 Mar",
              price: 196,
            },
            {
              id: 3,
              media: ["/thumbnails/3.webp", "/thumbnails/4.webp"],
              isFavourite: true,
              title: "Melaka, Malaysia",
              rating: 4.93,
              description: "203 kilometers away",
              date: "20-25 Mar",
              price: 50,
            },
            {
              id: 4,
              media: ["/thumbnails/4.webp", "/thumbnails/5.webp"],
              isFavourite: true,
              title: "MY, Malaysia",
              rating: 4.98,
              description: "On Pasir Juara",
              date: "16-21 Mar",
              price: 164,
            },
            {
              id: 5,
              media: ["/thumbnails/5.webp", "/thumbnails/6.webp"],
              isFavourite: true,
              title: "Nusajaya, Malaysia",
              rating: 4.89,
              description: "On the beach",
              date: "20-25 Mar",
              price: 76,
            },
            {
              id: 6,
              media: ["/thumbnails/6.webp", "/thumbnails/7.webp"],
              isFavourite: true,
              title: "Tioman Island, Malaysia",
              rating: 4.93,
              description: "On the beach",
              date: "15-20 Mar",
              price: 39,
            },
            {
              id: 7,
              media: ["/thumbnails/7.webp", "/thumbnails/8.webp"],
              isFavourite: true,
              title: "Johor Bahru, Malaysia",
              rating: 4.96,
              description: "On the beach",
              date: "25-30 Mar",
              price: 202,
            },
            {
              id: 8,
              media: ["/thumbnails/8.webp", "/thumbnails/9.webp"],
              isFavourite: true,
              title: "Johor Bahru, Malaysia",
              rating: 4.95,
              description: "On the beach",
              date: "31 Mar - 5 Apr",
              price: 163,
            },
            {
              id: 9,
              media: ["/thumbnails/9.webp", "/thumbnails/10.webp"],
              isFavourite: true,
              title: "Johor Bahru, Malaysia",
              rating: 4.94,
              description: "On the beach",
              date: "29 Mar - 3 Apr",
              price: 84,
            },
            {
              id: 10,
              media: ["/thumbnails/10.webp", "/thumbnails/11.webp"],
              isFavourite: true,
              title: "Johor Bahru, Malaysia",
              rating: 4.82,
              description: "On the beach",
              date: "29 Mar - 3 Apr",
              price: 68,
            },
            {
              id: 11,
              media: ["/thumbnails/11.webp", "/thumbnails/12.webp"],
              isFavourite: true,
              title: "Johor Bahru, Malaysia",
              rating: 4.96,
              description: "25 kilometres away",
              date: "13-18 May",
              price: 92,
            },
            {
              id: 12,
              media: ["/thumbnails/12.webp", "/thumbnails/1.webp"],
              isFavourite: false,
              title: "Johor Bahru, Malaysia",
              rating: 4.82,
              description: "On the beach",
              date: "31 Mar - 5 Apr",
              price: 71,
            },
          ]),
        3000
      );
    }
  }, [init]);

  const footer_tab_items = [
    { title: "Canmore", description: "Apartment rentals" },
    { title: "Benalmádena", description: "House rentals" },
    { title: "Marbella", description: "Beachfront rentals" },
    { title: "Mijas", description: "Flat rentals" },
    { title: "Prescott", description: "House rentals" },
    { title: "Scottsdale", description: "Mansion rentals" },
    { title: "Tucson", description: "Mansion rentals" },
    { title: "Jasper", description: "Holiday rentals" },
    { title: "Mountain View", description: "House rentals" },
    { title: "Devonport", description: "Cottage rentals" },
    { title: "Mallacoota", description: "Pet-friendly rentals" },
    { title: "Ibiza", description: "Holiday rentals" },
    { title: "Anaheim", description: "Beach house rentals" },
    { title: "Monterey", description: "Bungalow rentals" },
    { title: "Paso Robles", description: "Holiday rentals" },
    { title: "Santa Barbara", description: "Apartment rentals" },
    { title: "Sonoma", description: "Beach house rentals" },
  ];
  const arrShuffle = (arr) =>
    arr
      .map((o) => ({ o, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ o }) => o);

  return (
    <div className="flex flex-col w-full min-w-[360px] min-h-dvh">
      <Navbar />
      <div className="overflow-auto w-full h-full">
        <div
          id="airbnb"
          className="min-w-[1920px] text-[#717171] flex flex-col w-full bg-white relative text-sm"
        >
          <div className="flex px-20 py-12">
            <ul className="w-full grid grid-cols-6 gap-x-6 gap-y-10">
              {items.length > 0
                ? items.map((o) => (
                    <li
                      key={o.id}
                      className={[
                        "flex flex-col gap-y-3",
                        "[&:hover>div:first-child>div:nth-child(3)]:flex",
                      ].join(" ")}
                    >
                      <Media media={o.media} isFavourite={o.isFavourite} />
                      <div className="flex flex-col text-[15px] leading-[19px] gap-y-2">
                        <div className="flex flex-col gap-y-0.5">
                          <div className="text-[#222] flex justify-between items-center">
                            <p className="font-semibold">{o.title}</p>
                            <div className="flex items-center gap-x-1">
                              <span className="material-icons-outlined !text-[14px]">
                                star
                              </span>
                              <p>{o.rating}</p>
                            </div>
                          </div>
                          <p>{o.description}</p>
                          <p>{o.date}</p>
                        </div>
                        <p className="text-[#222]">
                          <span className="font-semibold">${o.price} SGD</span>{" "}
                          night
                        </p>
                      </div>
                    </li>
                  ))
                : Array.from(Array(12).keys()).map((o, i) => (
                    <li key={i} className="animate-pulse flex flex-col gap-y-3">
                      <div className="aspect-[270/257] w-full bg-gray-100 rounded-[28px]"></div>
                      <div className="flex flex-col text-[15px] leading-[19px] gap-y-2">
                        <div className="flex flex-col gap-y-0.5">
                          <div className="flex justify-between gap-x-2">
                            <div className="w-full h-[19px] bg-gray-100 rounded-[19px]"></div>
                            <div className="bg-gray-100 rounded-[19px] min-w-12 w-12 h-[19px]"></div>
                          </div>
                          <div className="h-[19px] bg-gray-100 w-full rounded-[19px]"></div>
                          <div className="h-[19px] bg-gray-100 w-full rounded-[19px]"></div>
                        </div>
                        <div className="h-[19px] bg-gray-100 w-full rounded-[19px]"></div>
                      </div>
                    </li>
                  ))}
            </ul>
          </div>
          <div
            className={[
              "bg-[#F7F7F7] flex flex-col items-center leading-[18px] divide-y divide-[#ddd]",
              "[&_a:not(:has(p:nth-child(2))):not(:has(.material-icons-outlined)):hover]:underline [&_a:has(.material-icons-outlined):hover>p]:underline",
            ].join(" ")}
          >
            <div className="w-full flex justify-center">
              <div className="flex w-full max-w-[1130px] flex-col gap-y-3.5 py-12">
                <p className="text-[22px] tracking-[-0.22px] text-[#222] font-semibold leading-[26px] font-medium">
                  Inspiration for future getaways
                </p>
                <div className="flex flex-col gap-y-8">
                  <ul
                    className={[
                      "flex font-semibold gap-x-[26px] border-b border-[#ddd]",
                      "[&>li]:cursor-pointer [&>li]:pt-2.5 [&>li]:pb-3.5 [&>li]:border-b-2 [&>li]:border-transparent",
                      "[&>li.active]:border-[#222] [&>li.active]:text-[#222]",
                    ].join(" ")}
                  >
                    {[
                      "Popular",
                      "Arts & culture",
                      "Outdoors",
                      "Mountains",
                      "Beach",
                      "Unique stays",
                      "Categories",
                      "Things to do",
                    ].map((o, i) => (
                      <li
                        key={i}
                        onClick={() => setFooterTabIdx(i)}
                        className={footerTabIdx === i ? "active" : ""}
                      >
                        {o}
                      </li>
                    ))}
                  </ul>
                  <ul className={["gap-x-2 gap-y-6 grid grid-cols-6"].join("")}>
                    {(footerTabIdx === 0
                      ? footer_tab_items
                      : arrShuffle(footer_tab_items)
                    ).map((o, i) => (
                      <li key={i}>
                        <a href="#">
                          <p className="font-semibold text-[#222]">{o.title}</p>
                          <p>{o.description}</p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="flex divide-y divide-[#ddd] w-full max-w-[1130px] flex-col">
                <ul
                  className={[
                    "grid grid-cols-3 text-[#222] gap-x-2 py-12",
                    "[&>li]:flex [&>li]:flex-col [&>li]:gap-y-3",
                    "[&>li>p]:font-semibold",
                    "[&>li>ul]:flex [&>li>ul]:flex-col [&>li>ul]:gap-y-3",
                  ].join(" ")}
                >
                  <li>
                    <p>Support</p>
                    <ul>
                      {[
                        "Help Centre",
                        "AirCover",
                        "Anti-discrimination",
                        "Disability support",
                        "Cancellation options",
                        "Report neighbourhood concern",
                      ].map((o, i) => (
                        <li key={i}>
                          <a href="#">{o}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <p>Hosting</p>
                    <ul>
                      {[
                        "Airbnb your home",
                        "AirCover for Hosts",
                        "Hosting resources",
                        "Community forum",
                        "Hosting responsibly",
                        "Join a free Hosting class",
                      ].map((o, i) => (
                        <li key={i}>
                          <a href="#">{o}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <p>Airbnb</p>
                    <ul>
                      {[
                        "Newsroom",
                        "New features",
                        "Careers",
                        "Investors",
                        "Airbnb.org emergency stays",
                      ].map((o, i) => (
                        <li key={i}>
                          <a href="#">{o}</a>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
                <div className="py-6 text-[#222] flex justify-between">
                  <div className="flex gap-x-5">
                    <p>© 2024 Airbnb, Inc.</p>
                    <ul className="flex gap-x-5">
                      <li>
                        <a href="#">Privacy</a>
                      </li>
                      <li>
                        <a href="#">Terms</a>
                      </li>
                      <li>
                        <a href="#">Sitemap</a>
                      </li>
                    </ul>
                  </div>
                  <div className="flex gap-x-6">
                    <ul
                      className={[
                        "flex gap-x-6",
                        "[&>li]:flex",
                        "[&>li>a]:flex [&>li>a]:gap-x-1",
                        "[&>li>a>span]:text-[18px]",
                        "[&>li>a>p]:font-semibold",
                      ].join(" ")}
                    >
                      <li>
                        <a href="#">
                          <span className="material-icons-outlined">
                            language
                          </span>
                          <p>English (SG)</p>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="material-icons-outlined">
                            attach_money
                          </span>
                          <p>SGD</p>
                        </a>
                      </li>
                    </ul>
                    <ul
                      className={[
                        "flex gap-x-4",
                        "[&>li]:flex",
                        "[&>li>a]:flex",
                        "[&>li>a>img]:w-[18px] [&>li>a>img]:h-[18px]",
                      ].join(" ")}
                    >
                      <li>
                        <a href="#">
                          <img src={facebook} />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={twitter} />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src={instagram} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirBnb;
