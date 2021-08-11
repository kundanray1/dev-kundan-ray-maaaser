 <ReceiverTransactionDetailCard
          data={item}
          amount={item.amount}
          date={item.createdat}
          textColor={theme.colors.black}
          transactionType={item.transactiontype}
          transactionMedium={item.transactionmedium}
          navigation={navigation}
          campaignTitle={
            item.campaign != undefined
              ? item.campaign.title
              : item.subcampaign != undefined
              ? item.subcampaign.campaign.title
              : undefined
          }
        />