describe('ticketCost', function(){
  it("returns cost for tickets based on time of movie, age of customer, and if the movie is first-run", function(){
    expect(ticketCost(Adult)).to.equal(8);
  });
});