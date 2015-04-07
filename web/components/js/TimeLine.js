		var oModel = new sap.ui.model.json.JSONModel({
			values : changeLog
		});
		
		// oModel.loadData("../../../../sdkhelp/web/components/databound/facetfilter/changes/state.json");

		var tlItem = new sap.suite.ui.commons.TimelineItem({
			dateTime : "{date}",
			userNameClickable : false,
			text : "{text}",
			userName : "{author}",
			title : "{title}",
			filterValue : "{filterValue}",
			icon : "{icon}",
			embeddedControl : new sap.ui.layout.VerticalLayout( {
				content: [
					new sap.ui.commons.Label ({
						text : "Change Details:",
						design: sap.ui.commons.LabelDesign.Bold,
					}),
					new sap.ui.commons.Label ({
						text : "{text}",
						icon : "{icon}",
					}),
					new sap.ui.commons.Label ({
						text : "Test Status:",
						design: sap.ui.commons.LabelDesign.Bold,
					}),
					new sap.ui.commons.Label ({
						text : "{test-comment}",
						icon : "{test-icon}",
					}),
				]
			})
		});
		
		tlItem.addStyleClass("resizeTimelineItem");
		
		tlItem.attachUserNameClicked(function(oControlEvent) {
			var oItem = oControlEvent.getSource();
			vCardName.setText(oItem.getUserName());
			oVCard.setIconPath("images/persons/male_MillerM.jpg");
			oPopover.openBy(oItem._userNameLink);
		});
		
		var timeline = new sap.suite.ui.commons.Timeline();
		timeline.setModel(oModel);
		timeline.bindAggregation("content", {
			path : "/values",
			template : tlItem
		});
		
		timeline.setSortOldestFirst(false);
		timeline.setWidth("100%");

		   var timelineUI = new sap.ui.commons.layout.MatrixLayout({
		       id: "stageMatrix",
		       layoutFixed: true,
		       columns: 1,
		       width: "100%",
		       widths: ["100%"],
		       height: "100%",
		   });

		 timelineUI.createRow({
		       height: "100%"
		   }, timeline);

		      var cellEmpty = new sap.ui.commons.layout.MatrixLayoutCell({
       id: "stageMatrixEmptyCell",
       colSpan: 2,
       height: "55px",
   });
   cellEmpty.addContent(new sap.ui.commons.Label({
       text: " "
   }));
   timelineUI.createRow({
       height: "55px"
   }, cellEmpty);
   
		   timelineUI.placeAt("changelog");