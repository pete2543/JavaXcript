# include<stdio.h> 
# include<conio.h> 
main()
{
    float price_km, price_times;
    int km, time, price, price_time, price_kmm;
    printf("Taximeter\n");
    printf("How far from here to there?\n");
    printf("It is\t");
    scanf("%d", &km);
    printf("How long if we get the traffic jam?\n");
    printf("It is\t");
    scanf("%d", &time);
    if (km <= 1)
    {
        price_km = 35;
    }
    else if (km <= 12)
    {
        price_km = 35 + (km - 1) * 5;
    }
    else if (km <= 20)
    {
        price_km = 90 + (km - 12) * 5.5;
    }
    else if (km <= 40)
    {
        price_km = 134 + (km - 20) * 6;
    }
    else if (km <= 60)
    {
        price_km = 254 + (km - 40) * 6.5;
    }
    else if (km <= 80)
    {
        price_km = 384 + (km - 60) * 7.5;
    }
    else
    {
        price_km = 534 + (km - 80) * 8.5;
    }
    price_kmm = (int)price_km;
    if (price_kmm % 2 == 0)
    {
        price_kmm = price_kmm + 1;
    }
    else
    {
        price_kmm = price_kmm;
    }
    price_times = time * 1.50;
    price_time = (int)price_times;
    if (price_time % 2 == 1)
    {
        price_time = price_time - 1;
    }
    else
    {
        price_time = price_time;
    }
    price = price_kmm + price_time;
    printf("You should to pay : ");
    printf("%d baht", price);
    getch();
}