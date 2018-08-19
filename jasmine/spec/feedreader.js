/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* The two tests described above can be combined, but should not
        seperating makes it easy to pinpoint a possible problem
         */

        /* test to check if url is defined
         */ 
        it('URL defined', function() {
            for(let instance of allFeeds){
                expect(instance.url).toBeDefined();
                expect(instance.url.length).not.toBe(0);
            }
        });

        /* test to check if name is defined
         */
        it('name defined', function() {
            for(let instance of allFeeds){
                expect(instance.name).toBeDefined();
                expect(instance.name.length).not.toBe(0);
            }
        });


    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
         /* test to check that initially menu is hidden
         */
        it('is hidden', function() {
            const body = document.querySelector('body');
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

        /* test to check that initially menu is hidden
         */
        it('menue toggles on and off', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });


    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* test that ensures when the loadFeed has at least one initial entry
         */
         beforeEach(function(done){
            loadFeed(0,done);
         });
         it('runs and completes loadFeed', function(){
            const feed= document.querySelector('.feed');
            expect(feed.children.length >0).toBe(true);
         });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        const feed = document.querySelector('.feed');
        const firstFeed=[];

         /* test that ensures that content changes when loadFeed function is used
         */
         beforeEach(function(done){
            loadFeed(0);
            Array.from(feed.children).forEach(function(entry){
                firstFeed.push(entry.innerText);
            });
            loadFeed(1,done);

         });
         
         it('content changes', function(){
            Array.from(feed.children).forEach(function(entry,index){
                expect(entry.innerText === firstFeed[index]).toBe(false);
            });
         });

    });
}());
