describe('newTicket', function() {
      it("generates a movie ticket based on the given parameters", function() {
        var testTicket = new newTicket("Spotlight", true, false, 18);
        expect(testTicket.movieTitle).to.equal("Spotlight");
        expect(testTicket.matinee).to.equal(true);
        expect(testTicket.newRelease).to.equal(false);
        expect(testTicket.userAge).to.eql(18);
  });
});

