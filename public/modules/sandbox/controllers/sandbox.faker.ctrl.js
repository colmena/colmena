'use strict';
angular
    .module ('module.sandbox')
    .controller ('SandboxFakerCtrl', function ($scope, $window, CoreService, FakeService, Event, Post, User) {

    var self                 = this;
    self.data                = [];
    self.records             = 10;
    self.save                = false;
    FakeService.faker.locale = 'pt_BR';

    console.log (FakeService);

    self.fakeUsers = function () {
        self.data = [];
        for (var i = 0; i < self.records; i++) {
            var fake = {
                email    : FakeService.faker.internet.email (),
                userName : FakeService.faker.internet.userName (),
                firstName: FakeService.faker.name.firstName (),
                lastName : FakeService.faker.name.lastName (),
                password : FakeService.faker.internet.password ()
            };
            self.data.push (fake);
            if (self.save) User.create (fake);
        }
        if (self.save) CoreService.toastSuccess ('Created ' + self.records + ' users');
    };

    self.fakePosts = function () {
        self.data = [];
        for (var i = 1; i <= self.records; i++) {
            var fake = {
                title  : FakeService.faker.lorem.sentence (),
                content: FakeService.faker.lorem.paragraph (),
                image  : FakeService.faker.image.imageUrl ()
            };
            self.data.push (fake);
            if (self.save) Post.create (fake);
        }
        if (self.save) CoreService.toastSuccess ('Created ' + self.records + ' posts');
    };

    self.fakeEvents = function () {
        self.data = [];
        for (var i = 0; i < self.records; i++) {
            var fake = {
                name       : FakeService.faker.lorem.sentence (),
                description: FakeService.faker.lorem.paragraph (),
                startTime  : FakeService.faker.date.future (),
                endTime    : FakeService.faker.date.future ()
            };
            self.data.push (fake);
            if (self.save) Event.create (fake);
        }
        if (self.save) CoreService.toastSuccess ('Created ' + self.records + ' events');
    };

});
