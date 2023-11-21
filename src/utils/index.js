export const chartData = [
    {
        period: "1M",
        personal: 150,
        shopping: 90,
        phone: 60,
        other: 80,
        total: 150 + 90 + 60 + 80,
    },
    {
        period: "6M",
        personal: 320,
        shopping: 240,
        phone: 255,
        other: 298,
        total: 320 + 240 + 255 + 298,
    },
    {
        period: "1Y",
        personal: 950,
        shopping: 930,
        phone: 738,
        other: 490,
        total: 950 + 930 + 738 + 490,
    },
    {
        period: "ALL TIME",
        personal: 1800,
        shopping: 1420,
        phone: 1265,
        other: 1000,
        total: 1800 + 1420 + 1265 + 1000,
    },
];

export const colors = ["#4C49ED", "#9D9BF4", "#4FD18B", "#141197"];

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}