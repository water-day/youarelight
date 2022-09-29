$(function() {

      function onSelectHandler(date, context) {
          /**
           * @date is an array which be included dates(clicked date at first index)
           * @context is an object which stored calendar interal data.
           * @context.calendar is a root element reference.
           * @context.calendar is a calendar element reference.
           * @context.storage.activeDates is all toggled data, If you use toggle type calendar.
           * @context.storage.events is all events associated to this date
           */

          var $element = context.element;
          var $calendar = context.calendar;
          var $box = $element.siblings('.box').show();
          var text = ' ';

          if (date[0] !== null) {
              text += date[0].format('YYYY-MM-DD');
          }

          if (date[0] !== null && date[1] !== null) {
              text += ' ~ ';
          }
          else if (date[0] === null && date[1] == null) {
              text += 'nothing';
          }

          if (date[1] !== null) {
              text += date[1].format('YYYY-MM-DD');
          }

          $box.text(text);
      }

      function onApplyHandler(date, context) {
          /**
           * @date is an array which be included dates(clicked date at first index)
           * @context is an object which stored calendar interal data.
           * @context.calendar is a root element reference.
           * @context.calendar is a calendar element reference.
           * @context.storage.activeDates is all toggled data, If you use toggle type calendar.
           * @context.storage.events is all events associated to this date
           */

          var $element = context.element;
          var $calendar = context.calendar;
          var $box = $element.siblings('.box').show();
          var text = ' ';

          if (date[0] !== null) {
              text += date[0].format('YYYY-MM-DD');
          }

          if (date[0] !== null && date[1] !== null) {
              text += ' ~ ';
          }
          else if (date[0] === null && date[1] == null) {
              text += 'nothing';
          }

          if (date[1] !== null) {
              text += date[1].format('YYYY-MM-DD');
          }

          $box.text(text);
      }
    $('.calendar').pignoseCalendar({
      select: onSelectHandler,
      lang:'en', //한글을 원하면 ko로 값 바꾸기, 한자는 ch로 값 바꾸기
      theme: 'light', // light, dark, blue
      minDate: moment().format("YYYY-MM-DD"),
      maxDate: '2022-12-31',
    });
});