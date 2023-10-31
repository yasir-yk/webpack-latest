$(document).ready(function() {
        function getHashFilter() {
            var hash = location.hash;
            // get filter=filterName
            var matches = location.hash.match(/filter=([^&]+)/i);
            var hashFilter = matches && matches[1];
            return hashFilter && decodeURIComponent(hashFilter);
        }
        $(function() {
            var $grid = $('.grid');
            // bind filter button click
            var $filters = $('#filters').on('click', 'button', function() {
                var filterAttr = $(this).attr('data-filter');
                // set filter in hash
                location.hash = 'filter=' + encodeURIComponent(filterAttr);
            });
            var isIsotopeInit = false;
            function onHashchange() {
                var hashFilter = getHashFilter();
                if (!hashFilter && isIsotopeInit) {
                    return;
                }
                isIsotopeInit = true;
                // filter isotope
                $grid.isotope({
                    itemSelector: '.grid-item',
                    filter: hashFilter,
                    percentPosition: true,
                    layoutMode: 'fitRows',
                });
                // set selected class on button
                if (hashFilter) {
                    $filters.find('.is-checked').removeClass('is-checked');
                    $filters.find('[data-filter="' + hashFilter + '"]').addClass('is-checked');
                }
            }
            $(window).on('hashchange', onHashchange);
            // trigger event handler to init Isotope
            onHashchange();
        });
    });