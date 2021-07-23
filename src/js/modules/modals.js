const modals = () => {
    function modal(triggerSelector, modalSelector, closeSelector) {
        const triggerBtn = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              closeBtn = document.querySelector(closeSelector);

        triggerBtn.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }
    
    modal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    modal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 60000);
};

export default modals;