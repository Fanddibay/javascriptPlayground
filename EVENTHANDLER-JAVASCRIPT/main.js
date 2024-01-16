function depatureTicket(pilot, going, client, pay) {
  this.pilot = pilot;
  this.going = going;
  this.client = client;
  this.pay = pay;

  this.addClient = function (addPassenger) {
    if (this.client.length == 0) {
      this.client.push(addPassenger);
      return this.client;
    } else {
      for (let i = 0; i < this.client.length; i++) {
        if (this.client[i] == addPassenger) {
          console.log("nama sudah ada");
          return this.client;
        } else if (this.client[i] == undefined) {
          this.client[i] = addPassenger;
          return this.client;
        } else if (i == this.client.length - 1) {
          this.client.push(addPassenger);
          return this.client;
        }
      }
    }
  };

  this.deleteClient = function (deletePassenger) {
    if (this.client.length == 0) {
      alert("data masih kosong!");
      return this.client;
    } else {
      for (let i = 0; i < this.client.length; i++) {
        if (this.client[i] == deletePassenger) {
          this.client[i] = undefined;
        } else if (this.client[i] != deletePassenger) {
          alert(deletePassenger + " tidak  ada dalam data");
        }
        return this.client;
      }
    }
  };
}

let depature = new depatureTicket("Fandi", ["Malaysia", "Indo"], [], 0);
console.log(depature);
