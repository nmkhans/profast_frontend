export function calculateCost(data) {
  const parcelType = data.parcelType;
  let weight = parseInt(data.parcelWeight) || 0;
  const isSameCity = data.senderRegion === data.reciverRegion;

  let cost = 0;

  if (parcelType === "document") {
    cost = isSameCity ? 60 : 80;
  } else {
    if (weight <= 3) {
      cost = isSameCity ? 110 : 150;
    } else {
      const firstThreeKGPrice = isSameCity ? 110 : 150;
      weight -= 3;

      cost =
        firstThreeKGPrice +
        (isSameCity ? weight * 40 : weight * 40 + 40);
    }

    return cost;
  }

  return cost;
}
