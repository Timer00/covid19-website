// ["0", "1", "2", "3", "4", "5", "6", "code", "population", "continentExp", "cases_cum", "deaths_cum"]

// ["ID","date", "day", "month", "year", "cases", "deaths", "country", "code", "population", "continentExp", "cases_cum", "deaths_cum"]

let DATA = [
  ["0", "2019-12-31", 31, 12, 2019, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["1", "2020-01-01", 1, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["2", "2020-01-02", 2, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["3", "2020-01-03", 3, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["4", "2020-01-04", 4, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["5", "2020-01-05", 5, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["6", "2020-01-06", 6, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["7", "2020-01-07", 7, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["8", "2020-01-08", 8, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["9", "2020-01-09", 9, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["10", "2020-01-10", 10, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["11", "2020-01-11", 11, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["12", "2020-01-12", 12, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["13", "2020-01-13", 13, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["14", "2020-01-14", 14, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["15", "2020-01-15", 15, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["16", "2020-01-16", 16, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["17", "2020-01-17", 17, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["18", "2020-01-18", 18, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["19", "2020-01-19", 19, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["20", "2020-01-20", 20, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["21", "2020-01-21", 21, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["22", "2020-01-22", 22, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["23", "2020-01-23", 23, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["24", "2020-01-24", 24, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["25", "2020-01-25", 25, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["26", "2020-01-26", 26, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["27", "2020-01-27", 27, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 0, "0"],
  ["28", "2020-01-28", 28, 1, 2020, 1, 0, "Germany", "DE", 82927922, "Europe", 1, "0"],
  ["29", "2020-01-29", 29, 1, 2020, 3, 0, "Germany", "DE", 82927922, "Europe", 4, "0"],
  ["30", "2020-01-30", 30, 1, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 4, "0"],
  ["31", "2020-01-31", 31, 1, 2020, 1, 0, "Germany", "DE", 82927922, "Europe", 5, "0"],
  ["32", "2020-02-01", 1, 2, 2020, 2, 0, "Germany", "DE", 82927922, "Europe", 7, "0"],
  ["33", "2020-02-02", 2, 2, 2020, 1, 0, "Germany", "DE", 82927922, "Europe", 8, "0"],
  ["34", "2020-02-03", 3, 2, 2020, 1, 0, "Germany", "DE", 82927922, "Europe", 9, "0"],
  ["35", "2020-02-04", 4, 2, 2020, 2, 0, "Germany", "DE", 82927922, "Europe", 11, "0"],
  ["36", "2020-02-05", 5, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 11, "0"],
  ["37", "2020-02-06", 6, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 11, "0"],
  ["38", "2020-02-07", 7, 2, 2020, 1, 0, "Germany", "DE", 82927922, "Europe", 12, "0"],
  ["39", "2020-02-08", 8, 2, 2020, 1, 0, "Germany", "DE", 82927922, "Europe", 13, "0"],
  ["40", "2020-02-09", 9, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 13, "0"],
  ["41", "2020-02-10", 10, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 13, "0"],
  ["42", "2020-02-11", 11, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 13, "0"],
  ["43", "2020-02-12", 12, 2, 2020, 2, 0, "Germany", "DE", 82927922, "Europe", 15, "0"],
  ["44", "2020-02-13", 13, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 15, "0"],
  ["45", "2020-02-14", 14, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 15, "0"],
  ["46", "2020-02-15", 15, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 15, "0"],
  ["47", "2020-02-16", 16, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 15, "0"],
  ["48", "2020-02-17", 17, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 15, "0"],
  ["49", "2020-02-18", 18, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 15, "0"],
  ["50", "2020-02-19", 19, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 15, "0"],
  ["51", "2020-02-20", 20, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 15, "0"],
  ["52", "2020-02-21", 21, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 15, "0"],
  ["53", "2020-02-22", 22, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 15, "0"],
  ["54", "2020-02-23", 23, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 15, "0"],
  ["55", "2020-02-24", 24, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 15, "0"],
  ["56", "2020-02-25", 25, 2, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 15, "0"],
  ["57", "2020-02-26", 26, 2, 2020, 2, 0, "Germany", "DE", 82927922, "Europe", 17, "0"],
  ["58", "2020-02-27", 27, 2, 2020, 4, 0, "Germany", "DE", 82927922, "Europe", 21, "0"],
  ["59", "2020-02-28", 28, 2, 2020, 26, 0, "Germany", "DE", 82927922, "Europe", 47, "0"],
  ["60", "2020-02-29", 29, 2, 2020, 10, 0, "Germany", "DE", 82927922, "Europe", 57, "0"],
  ["61", "2020-03-01", 1, 3, 2020, 54, 0, "Germany", "DE", 82927922, "Europe", 111, "0"],
  ["62", "2020-03-02", 2, 3, 2020, 18, 0, "Germany", "DE", 82927922, "Europe", 129, "0"],
  ["63", "2020-03-03", 3, 3, 2020, 28, 0, "Germany", "DE", 82927922, "Europe", 157, "0"],
  ["64", "2020-03-04", 4, 3, 2020, 39, 0, "Germany", "DE", 82927922, "Europe", 196, "0"],
  ["65", "2020-03-05", 5, 3, 2020, 66, 0, "Germany", "DE", 82927922, "Europe", 262, "0"],
  ["66", "2020-03-06", 6, 3, 2020, 138, 0, "Germany", "DE", 82927922, "Europe", 400, "0"],
  ["67", "2020-03-07", 7, 3, 2020, 284, 0, "Germany", "DE", 82927922, "Europe", 684, "0"],
  ["68", "2020-03-08", 8, 3, 2020, 163, 0, "Germany", "DE", 82927922, "Europe", 847, "0"],
  ["69", "2020-03-09", 9, 3, 2020, 55, 0, "Germany", "DE", 82927922, "Europe", 902, "0"],
  ["70", "2020-03-10", 10, 3, 2020, 237, 2, "Germany", "DE", 82927922, "Europe", 1139, "2"],
  ["71", "2020-03-11", 11, 3, 2020, 157, 0, "Germany", "DE", 82927922, "Europe", 1296, "2"],
  ["72", "2020-03-12", 12, 3, 2020, 271, 1, "Germany", "DE", 82927922, "Europe", 1567, "3"],
  ["73", "2020-03-13", 13, 3, 2020, 802, 2, "Germany", "DE", 82927922, "Europe", 2369, "5"],
  ["74", "2020-03-14", 14, 3, 2020, 693, 0, "Germany", "DE", 82927922, "Europe", 3062, "5"],
  ["75", "2020-03-15", 15, 3, 2020, 733, 3, "Germany", "DE", 82927922, "Europe", 3795, "8"],
  ["76", "2020-03-16", 16, 3, 2020, 1043, 4, "Germany", "DE", 82927922, "Europe", 4838, "12"],
  ["77", "2020-03-17", 17, 3, 2020, 1174, 1, "Germany", "DE", 82927922, "Europe", 6012, "13"],
  ["78", "2020-03-18", 18, 3, 2020, 1144, 0, "Germany", "DE", 82927922, "Europe", 7156, "13"],
  ["79", "2020-03-19", 19, 3, 2020, 1042, 0, "Germany", "DE", 82927922, "Europe", 8198, "13"],
  ["80", "2020-03-20", 20, 3, 2020, 5940, 30, "Germany", "DE", 82927922, "Europe", 14138, "43"],
  ["81", "2020-03-21", 21, 3, 2020, 4049, 2, "Germany", "DE", 82927922, "Europe", 18187, "45"],
  ["82", "2020-03-22", 22, 3, 2020, 3276, 22, "Germany", "DE", 82927922, "Europe", 21463, "67"],
  ["83", "2020-03-23", 23, 3, 2020, 3311, 27, "Germany", "DE", 82927922, "Europe", 24774, "94"],
  ["84", "2020-03-24", 24, 3, 2020, 4438, 32, "Germany", "DE", 82927922, "Europe", 29212, "126"],
  ["85", "2020-03-25", 25, 3, 2020, 2342, 23, "Germany", "DE", 82927922, "Europe", 31554, "149"],
  ["86", "2020-03-26", 26, 3, 2020, 4954, 49, "Germany", "DE", 82927922, "Europe", 36508, "198"],
  ["87", "2020-03-27", 27, 3, 2020, 5780, 55, "Germany", "DE", 82927922, "Europe", 42288, "253"],
  ["88", "2020-03-28", 28, 3, 2020, 6294, 72, "Germany", "DE", 82927922, "Europe", 48582, "325"],
  ["89", "2020-03-29", 29, 3, 2020, 3965, 64, "Germany", "DE", 82927922, "Europe", 52547, "389"],
  ["90", "2020-03-30", 30, 3, 2020, 4751, 66, "Germany", "DE", 82927922, "Europe", 57298, "455"],
  ["91", "2020-03-31", 31, 3, 2020, 4615, 128, "Germany", "DE", 82927922, "Europe", 61913, "583"],
  ["92", "2020-04-01", 1, 4, 2020, 5453, 149, "Germany", "DE", 82927922, "Europe", 67366, "732"],
  ["93", "2020-04-02", 2, 4, 2020, 6156, 140, "Germany", "DE", 82927922, "Europe", 73522, "872"],
  ["94", "2020-04-03", 3, 4, 2020, 6174, 145, "Germany", "DE", 82927922, "Europe", 79696, "1017"],
  ["95", "2020-04-04", 4, 4, 2020, 6082, 141, "Germany", "DE", 82927922, "Europe", 85778, "1158"],
  ["96", "2020-04-05", 5, 4, 2020, 5936, 184, "Germany", "DE", 82927922, "Europe", 91714, "1342"],
  ["97", "2020-04-06", 6, 4, 2020, 3677, 92, "Germany", "DE", 82927922, "Europe", 95391, "1434"],
  ["98", "2020-04-07", 7, 4, 2020, 3834, 173, "Germany", "DE", 82927922, "Europe", 99225, "1607"],
  ["99", "2020-04-08", 8, 4, 2020, 4003, 254, "Germany", "DE", 82927922, "Europe", 103228, "1861"],
  ["100", "2020-04-09", 9, 4, 2020, 4974, 246, "Germany", "DE", 82927922, "Europe", 108202, "2107"],
  ["101", "2020-04-10", 10, 4, 2020, 5323, 266, "Germany", "DE", 82927922, "Europe", 113525, "2373"],
  ["102", "2020-04-11", 11, 4, 2020, 4133, 171, "Germany", "DE", 82927922, "Europe", 117658, "2544"],
  ["103", "2020-04-12", 12, 4, 2020, 2821, 129, "Germany", "DE", 82927922, "Europe", 120479, "2673"],
  ["104", "2020-04-13", 13, 4, 2020, 2537, 126, "Germany", "DE", 82927922, "Europe", 123016, "2799"],
  ["105", "2020-04-14", 14, 4, 2020, 2082, 170, "Germany", "DE", 82927922, "Europe", 125098, "2969"],
  ["106", "2020-04-15", 15, 4, 2020, 2486, 285, "Germany", "DE", 82927922, "Europe", 127584, "3254"],
  ["107", "2020-04-16", 16, 4, 2020, 2866, 315, "Germany", "DE", 82927922, "Europe", 130450, "3569"],
  ["108", "2020-04-17", 17, 4, 2020, 3380, 299, "Germany", "DE", 82927922, "Europe", 133830, "3868"],
  ["109", "2020-04-18", 18, 4, 2020, 3609, 242, "Germany", "DE", 82927922, "Europe", 137439, "4110"],
  ["110", "2020-04-19", 19, 4, 2020, 2458, 184, "Germany", "DE", 82927922, "Europe", 139897, "4294"],
  ["111", "2020-04-20", 20, 4, 2020, 1775, 110, "Germany", "DE", 82927922, "Europe", 141672, "4404"],
  ["112", "2020-04-21", 21, 4, 2020, 1785, 194, "Germany", "DE", 82927922, "Europe", 143457, "4598"],
  ["113", "2020-04-22", 22, 4, 2020, 2237, 281, "Germany", "DE", 82927922, "Europe", 145694, "4879"],
  ["114", "2020-04-23", 23, 4, 2020, 2352, 215, "Germany", "DE", 82927922, "Europe", 148046, "5094"],
  ["115", "2020-04-24", 24, 4, 2020, 2337, 227, "Germany", "DE", 82927922, "Europe", 150383, "5321"],
  ["116", "2020-04-25", 25, 4, 2020, 2055, 179, "Germany", "DE", 82927922, "Europe", 152438, "5500"],
  ["117", "2020-04-26", 26, 4, 2020, 1737, 140, "Germany", "DE", 82927922, "Europe", 154175, "5640"],
  ["118", "2020-04-27", 27, 4, 2020, 1018, 110, "Germany", "DE", 82927922, "Europe", 155193, "5750"],
  ["119", "2020-04-28", 28, 4, 2020, 1144, 163, "Germany", "DE", 82927922, "Europe", 156337, "5913"],
  ["120", "2020-04-29", 29, 4, 2020, 1304, 202, "Germany", "DE", 82927922, "Europe", 157641, "6115"],
  ["121", "2020-04-30", 30, 4, 2020, 1478, 173, "Germany", "DE", 82927922, "Europe", 159119, "6288"],
  ["122", "2020-05-01", 1, 5, 2020, 0, 0, "Germany", "DE", 82927922, "Europe", 159119, "6288"],
  ["123", "2020-05-02", 2, 5, 2020, 2584, 287, "Germany", "DE", 82927922, "Europe", 161703, "6575"],
  ["124", "2020-05-03", 3, 5, 2020, 793, 74, "Germany", "DE", 82927922, "Europe", 162496, "6649"],
  ["125", "2020-05-04", 4, 5, 2020, 679, 43, "Germany", "DE", 82927922, "Europe", 163175, "6692"],
  ["126", "2020-05-05", 5, 5, 2020, 685, 139, "Germany", "DE", 82927922, "Europe", 163860, "6831"],
  ["127", "2020-05-06", 6, 5, 2020, 1037, 165, "Germany", "DE", 82927922, "Europe", 164897, "6996"],
  ["128", "2020-05-07", 7, 5, 2020, 1194, 123, "Germany", "DE", 82927922, "Europe", 166091, "7119"],
  ["129", "2020-05-08", 8, 5, 2020, 1209, 147, "Germany", "DE", 82927922, "Europe", 167300, "7266"],
  ["130", "2020-05-09", 9, 5, 2020, 1251, 103, "Germany", "DE", 82927922, "Europe", 168551, "7369"],
  ["131", "2020-05-10", 10, 5, 2020, 667, 26, "Germany", "DE", 82927922, "Europe", 169218, "7395"],
  ["132", "2020-05-11", 11, 5, 2020, 357, 22, "Germany", "DE", 82927922, "Europe", 169575, "7417"],
  ["133", "2020-05-12", 12, 5, 2020, 933, 116, "Germany", "DE", 82927922, "Europe", 170508, "7533"],
  ["134", "2020-05-13", 13, 5, 2020, 798, 101, "Germany", "DE", 82927922, "Europe", 171306, "7634"],
  ["135", "2020-05-14", 14, 5, 2020, 933, 89, "Germany", "DE", 82927922, "Europe", 172239, "7723"],
  ["136", "2020-05-15", 15, 5, 2020, 913, 101, "Germany", "DE", 82927922, "Europe", 173152, "7824"],
  ["137", "2020-05-16", 16, 5, 2020, 620, 57, "Germany", "DE", 82927922, "Europe", 173772, "7881"],
  ["138", "2020-05-17", 17, 5, 2020, 583, 33, "Germany", "DE", 82927922, "Europe", 174355, "7914"],
  ["139", "2020-05-18", 18, 5, 2020, 342, 21, "Germany", "DE", 82927922, "Europe", 174697, "7935"],
  ["140", "2020-05-19", 19, 5, 2020, 513, 72, "Germany", "DE", 82927922, "Europe", 175210, "8007"],
  ["141", "2020-05-20", 20, 5, 2020, 797, 83, "Germany", "DE", 82927922, "Europe", 176007, "8090"],
  ["142", "2020-05-21", 21, 5, 2020, 745, 57, "Germany", "DE", 82927922, "Europe", 176752, "8147"],
  ["143", "2020-05-22", 22, 5, 2020, 460, 27, "Germany", "DE", 82927922, "Europe", 177212, "8174"],
  ["144", "2020-05-23", 23, 5, 2020, 638, 42, "Germany", "DE", 82927922, "Europe", 177850, "8216"],
  ["145", "2020-05-24", 24, 5, 2020, 431, 31, "Germany", "DE", 82927922, "Europe", 178281, "8247"],
  ["146", "2020-05-25", 25, 5, 2020, 289, 10, "Germany", "DE", 82927922, "Europe", 178570, "8257"],
  ["147", "2020-05-26", 26, 5, 2020, 432, 45, "Germany", "DE", 82927922, "Europe", 179002, "8302"],
  ["148", "2020-05-27", 27, 5, 2020, 362, 47, "Germany", "DE", 82927922, "Europe", 179364, "8349"],
  ["149", "2020-05-28", 28, 5, 2020, 353, 62, "Germany", "DE", 82927922, "Europe", 179717, "8411"],
  ["150", "2020-05-29", 29, 5, 2020, 741, 39, "Germany", "DE", 82927922, "Europe", 180458, "8450"],
  ["151", "2020-05-30", 30, 5, 2020, 738, 39, "Germany", "DE", 82927922, "Europe", 181196, "8489"],
  ["152", "2020-05-31", 31, 5, 2020, 286, 11, "Germany", "DE", 82927922, "Europe", 181482, "8500"],
  ["153", "2020-06-01", 1, 6, 2020, 333, 11, "Germany", "DE", 82927922, "Europe", 181815, "8511"],
  ["154", "2020-06-02", 2, 6, 2020, 213, 11, "Germany", "DE", 82927922, "Europe", 182028, "8522"],
  ["155", "2020-06-03", 3, 6, 2020, 342, 29, "Germany", "DE", 82927922, "Europe", 182370, "8551"],
  ["156", "2020-06-04", 4, 6, 2020, 394, 30, "Germany", "DE", 82927922, "Europe", 182764, "8581"]
];

let arr = DATA;

//===========[UTILITIES]===============

function myMean(x, column) {

  let sum = 0;

  for (let strings of x) {
    sum += parseInt(strings[column]);
  }

  return sum / x.length;
}

function myMaxValue(x, column) {

  let maxValue = 0;

  for (let strings of x) {
    let val = parseInt(strings[column]);
    if (val > maxValue) {
      maxValue = val;
    }
  }
  return maxValue;
}

function myMinValue(x, column) {

  let minVal = myMaxValue(x, column);

  for (let strings of x) {
    let val = parseInt(strings[column]);
    if (val < minVal) {
      minVal = val;
    }
  }
  return minVal;
}


function myRangeValue(x, column) {

  let range;

  range = myMaxValue(x, column) - myMinValue(x, column);

  return range;
}

function myMedianValue(x, column) {

  let arr = [];
  for (let i of x) {
    arr.push(i[column]);
  }

  arr = arr.sort();

  let median;

  if (x.length % 2 !== 0) {

    median = parseInt(x[(x.length + 1) / 2][column]);

    return median;

  } else {

    median = (parseInt(x[x.length / 2][column]) + parseInt(x[x.length / 2 + 1][column]));

    return median;
  }
}


function myVarianceValue(x, column) {
  let variance = 0;
  for (let strings of x) {
    variance += Math.pow(parseInt(strings[column]) - myMean(x, column), 2);
  }
  variance /= DATA.length;

  return variance;
}

function myStddeviationValue(x, column) {

  let sum = 0;

  let mean = myMean(x, column);

  for (let strings of x) {
    sum = sum + (parseInt(strings[column]) - mean) * (parseInt(strings[column]) - mean);
  }
  let squaredDiffMean = (sum) / (x.length);

  return (Math.sqrt(squaredDiffMean));
}

//========[CODE]===============

let meanElement = document.getElementById('meanElement');
let maximumElement = document.getElementById('maximumElement');
let minimumElement = document.getElementById('minimumElement');
let rangeElement = document.getElementById('rangeElement');
let medianElement = document.getElementById('medianElement');
let varianceElement = document.getElementById('varianceElement');
let stddeviationElement = document.getElementById('stddeviationElement');


meanElement.innerHTML = Math.round(myMean(arr, 5));
maximumElement.innerHTML = myMaxValue(arr, 5);
minimumElement.innerHTML = myMinValue(arr, 5);
rangeElement.innerHTML = myRangeValue(arr, 5);
medianElement.innerHTML = Math.round(myMedianValue(arr, 5));
varianceElement.innerHTML = Math.round(myVarianceValue(arr, 5));
stddeviationElement.innerHTML = Math.round(myStddeviationValue(arr, 5));


let meanElement2 = document.getElementById('meanElement2');
let maximumElement2 = document.getElementById('maximumElement2');
let minimumElement2 = document.getElementById('minimumElement2');
let rangeElement2 = document.getElementById('rangeElement2');
let medianElement2 = document.getElementById('medianElement2');
let varianceElement2 = document.getElementById('varianceElement2');
let stddeviationElement2 = document.getElementById('stddeviationElement2');


meanElement2.innerHTML = Math.round(myMean(arr, 6));
maximumElement2.innerHTML = myMaxValue(arr, 6);
minimumElement2.innerHTML = myMinValue(arr, 6);
rangeElement2.innerHTML = myRangeValue(arr, 6);
medianElement2.innerHTML = Math.round(myMedianValue(arr, 6));
varianceElement2.innerHTML = Math.round(myVarianceValue(arr, 6));
stddeviationElement2.innerHTML = Math.round(myStddeviationValue(arr, 6));
