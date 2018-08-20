$(function() {
    /* test suit that checks if everything is defined
    */
    describe('RSS Feeds', function() {
        /* test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.*/
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* The two tests described above can be combined, but should not.
        seperating makes it easy to pinpoint a possible problem.
         */

        /* test to check if url is defined
         */ 
        it('URL defined', function() {
            for(let link of allFeeds){
                expect(link.url).toBeDefined();
                expect(link.url.length).not.toBe(0);
            }
        });

        /* test to check if name is defined
         */
        it('name defined', function() {
            for(let link of allFeeds){
                expect(link.name).toBeDefined();
                expect(link.name.length).not.toBe(0);
            }
        });


    });


    //test suite named "The menu". It checks visibility function of menu
    describe('The menu', function() {

         // test to check that initially menu is hidden
        it('is hidden', function() {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        // test to check that initially menu is hidden
        it('menue toggles on and off', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

    });

    // test suite named "Initial Entries". It checks that we never have empty feed
    describe('Initial Entries', function() {

        // test that ensures when the loadFeed has at least one initial entry
        //asynchronous function
         beforeEach(function(done){
            loadFeed(0,done);
         });

         //test code below
         it('runs and completes loadFeed', function(){
            const feed = document.querySelector('.feed');
            expect(feed.children.length >0).toBe(true);
         });
    });


    // test suite named "New Feed Selection". This suit checks if update happens when new item is added.
    describe('New Feed Selection', function() {
         // test that ensures that content changes when loadFeed function is used

        //define variables
        let feedOne, feedTwo;
        
        //nested functions with the most inner function having a done() statement.
        //load and retrieve feeds
        beforeEach(function(done){
            loadFeed(0, function(){
                FeedOne = document.querySelector(".entry").innerText;

                loadFeed(1, function(){
                    feedTwo = document.querySelector(".entry").innerText;
                    done();
                });
            });
        });
           
        //spec that compares two feeds 
        it("content changes", function(){
        	console.log(feedOne);
            console.log(feedTwo);
            expect(feedTwo === feedOne).not.toBe(true);
		});

    });
}());
