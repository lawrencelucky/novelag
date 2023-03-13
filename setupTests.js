window.matchMedia =
    window.matchMedia ||
    function () {
        return {
            addListener: function () {},
            matches: false,
            removeListener: function () {},
        };
    };
