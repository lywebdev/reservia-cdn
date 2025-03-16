(function () {
    const $reserviaWidgetsContainer = document.createElement('div');
    $reserviaWidgetsContainer.id = '.reserviaWidgets';
    document.body.appendChild($reserviaWidgetsContainer);

    const loadWidget = async () => {
        const shadow = $reserviaWidgetsContainer.attachShadow({ mode: 'open' });
        const $shadowContainer = document.createElement('div');
        $shadowContainer.id = 'shadow-container';
        shadow.appendChild($shadowContainer);

        const style = document.createElement('style');
        shadow.appendChild(style);

        const allowed = true;
        if (!allowed) {
            console.log('Widget not authorized for this domain');
            return;
        }

        const script = document.createElement('script');
        // script.src = 'reserviaBookingWidget.js';
        script.src = 'https://cdn.jsdelivr.net/gh/lywebdev/reservia-cdn@master/build/widgets/reserviaBookingWidget.bundle.js';
        script.async = 1;
        script.type = "module";

        script.onerror = () => {
            console.error(`Error loading script ${src}`);
        };

        shadow.appendChild(script);
    };

    loadWidget();
})();
