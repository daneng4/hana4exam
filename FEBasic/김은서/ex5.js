module.exports = {
  searchByKoreanInitialSound: (data, firstSounds) => {
    const chosung = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ',
      'ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
    
    const hangul_start = "가".charCodeAt();

    const cho_range = Math.floor("까".charCodeAt() - "가".charCodeAt());
    const jung_range = Math.floor("개".charCodeAt() - "가".charCodeAt());

    function combine(cho, jung, jong) {
      return String.fromCharCode(
        hangul_start + cho * cho_range + jung * jung_range + jong
      );
    }

    function makeRegex(search = ''){
      const regex = chosung.reduce(
        (acc, cho, index) =>
          acc.replace(
            new RegExp(cho, "g"),
             `[${combine(index, 0, 0)}-${combine(index + 1, 0, -1)}]`
          ),
          search
      );
      return new RegExp(`(${regex})`, "g");
    }
    
    return data.filter((d) => makeRegex(firstSounds).test(d));
  },
};