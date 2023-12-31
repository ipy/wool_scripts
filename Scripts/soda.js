let obj = JSON.parse($response.body);
obj.data.objects.forEach((item) => {
  item.imageUrl =
    "https://raw.githubusercontent.com/ipy/wool_scripts/main/pic/rewrite/warm_water.png";
});
$done({ body: JSON.stringify(obj) });
