var readability = function() {
  readConvertLinksToFootnotes=false;
  readStyle='style-newspaper';
  readSize='size-small';
  readMargin='margin-medium';
  _readability_script=document.createElement('script');
  _readability_script.type='text/javascript';
  _readability_script.src='http://lab.arc90.com/experiments/readability/js/readability.js?x='+(Math.random());
  document.documentElement.appendChild(_readability_script);
  _readability_css=document.createElement('link');
  _readability_css.rel='stylesheet';
  _readability_css.href='http://lab.arc90.com/experiments/readability/css/readability.css';
  _readability_css.type='text/css';
  _readability_css.media='all';
  document.documentElement.appendChild(_readability_css);
  _readability_print_css=document.createElement('link');
  _readability_print_css.rel='stylesheet';
  _readability_print_css.href='http://lab.arc90.com/experiments/readability/css/readability-print.css';
  _readability_print_css.media='print';
  _readability_print_css.type='text/css';
  document.getElementsByTagName('head')[0].appendChild(_readability_print_css);
}

$('.textButton').remove();
