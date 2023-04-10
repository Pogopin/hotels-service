export const dataIn = (selector, callback) => {

    const DateInput = new easepick.create({
        element: document.getElementById(selector),
        css: ['https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',],
        zIndex: 10,
        format: 'YYYY-MM-DD',
		
        setup(DateInput) {
            DateInput.on('select', (e) => {
                const date = DateInput.getDate().format('YYYY-MM-DD')
                callback(date);
            });
        }
    });
}

// const DateFrom = new easepick.create({
    //         element: document.getElementById('checkin_date_from'),
    //         css: ['https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',],
    //         zIndex: 10,
    
    //         setup(DateFrom) {
    //             DateFrom.on('select', (e) => {
    //                 console.log(DateFrom.getDate());
                             
    //             });
                
    //         },
    
    //       });