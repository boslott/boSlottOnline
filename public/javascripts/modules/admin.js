

//  Add paragraphs as needed for the full description of a Project
const addDescriptionParagraph = () => {
  let inputCounter = 1;
  $('#addDescrPara').on('click', () => {

    const newLabel = $('<label></label>')
      .attr('for', `fullDescription${inputCounter}`)
      .text('Next Paragraph');

    const newTextarea = $('<textarea>')
      .attr('id', `fullDescription${inputCounter}`)
      .attr('name', 'fullDescriptionParagraphs')
      .attr('placeholder', 'Next paragraph . . .')
      .addClass('w-100 form-control');

    const col1 = $('<div></div>')
      .addClass('col-sm-10 form-group')
      .append(newLabel)
      .append(newTextarea);

    $('.moreParagraphs').append(col1);
    inputCounter++;

  });
};

//  Add service to the servicesList as needed for a Project
const addServiceItemInput = () => {
  let inputCounter = 1;
  $('#addServiceInput').on('click', () => {

    const newLabel = $('<label></label>')
      .attr('for', `servicesList${inputCounter}`)
      .text('Next Service');

    const newInput = $('<input>')
      .attr('type', 'text')
      .attr('id', `servicesList${inputCounter}`)
      .attr('name', 'servicesList')
      .addClass('services form-control');

    const col1 = $('<div></div>')
      .addClass('col-sm-6 form-group ml-3')
      .append(newLabel)
      .append(newInput);

    const col2 = $('<div></div>')
      .addClass('col-sm-6');

    $('.moreServices').append(col1).append(col2);
    inputCounter++;

  });
};


//  Add features to the featuresList as needed for a Project
const addFeatureItemInput = () => {
  let inputCounter = 1;
  $('#addFeatureInput').on('click', () => {

    const newLabel = $('<label></label>')
      .attr('for', `featuresList${inputCounter}`)
      .text('Next Feature');

    const newInput = $('<input>')
      .attr('type', 'text')
      .attr('id', `featuresList${inputCounter}`)
      .attr('name', 'featuresList')
      .addClass('features form-control');

    const col1 = $('<div></div>')
      .addClass('col-sm-6 form-group ml-3')
      .append(newLabel)
      .append(newInput);

    const col2 = $('<div></div>')
      .addClass('col-sm-6');

    $('.moreFeatures').append(col1).append(col2);
    inputCounter++;

  });
}

//  Add technologies to the technologiesUsed list as needed for a Project
const addTechnologyItemInput = () => {
  let inputCounter = 1;
  $('#addTechnologyItem').on('click', () => {

    const newLabel = $('<label></label>')
      .attr('for', `technologiesList${inputCounter}`)
      .text('Next Technology');

    const newInput = $('<input>')
      .attr('type', 'text')
      .attr('id', `technologiesList${inputCounter}`)
      .attr('name', 'technologiesList')
      .addClass('technologies form-control');

    const col1 = $('<div></div>')
      .addClass('col-sm-6 form-group ml-3')
      .append(newLabel)
      .append(newInput);

    const col2 = $('<div></div>')
      .addClass('col-sm-6');

    $('.moreTechnologies').append(col1).append(col2);
    inputCounter++;

  });
};

// Add category to the categories list as needed for a Post
const addCategoryInput = () => {
  let inputCounter = 1;
  $('#addCategory').on('click', () => {

    const newLabel = $('<label></label>')
      .attr('for', `categories${inputCounter}`)
      .text('Next Category');

    const newInput = $('<input>')
      .attr('type', 'text')
      .attr('id', `categories${inputCounter}`)
      .attr('name', 'categories')
      .addClass('categories form-control');

    const col1 = $('<div></div>')
      .addClass('col-sm-6 form-group ml-3')
      .append(newLabel)
      .append(newInput);

    const col2 = $('<div></div>')
      .addClass('col-sm-6');

    $('.moreCategories').append(col1).append(col2);
    inputCounter++;

  });
};

// Add keyword to the keywords list as needed for a Post
const addKeywordInput = () => {
  let inputCounter = 1;
  $('#addKeyword').on('click', () => {

    const newLabel = $('<label></label>')
      .attr('for', `keywords${inputCounter}`)
      .text('Next Keyword');

    const newInput = $('<input>')
      .attr('type', 'text')
      .attr('id', `keywords${inputCounter}`)
      .attr('name', 'keywords')
      .addClass('keywords form-control');

    const col1 = $('<div></div>')
      .addClass('col-sm-6 form-group ml-3')
      .append(newLabel)
      .append(newInput);

    const col2 = $('<div></div>')
      .addClass('col-sm-6');

    $('.moreKeywords').append(col1).append(col2);
    inputCounter++;

  });
};


$(document).ready(function() {

  addDescriptionParagraph();
  addServiceItemInput();
  addFeatureItemInput();
  addTechnologyItemInput();
  addCategoryInput();
  addKeywordInput();

  // Summernote Initialization
  $('#summernote').summernote({
    height: 200
  })



});