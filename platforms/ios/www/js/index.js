$( document ).ready(function() {
  loadedTranslations = getTranslations();
  translationsIndex = 0;

  function getTranslations() {
    var translations = [["Hello", "Bonjour"], ["Good bye", "Au revoir"]];
    return translations;
  }

  function updateTranslationQuizz() {
    $("#translation-guess .word").html(loadedTranslations[translationsIndex][0]);
  }

  function updateTranslationResult() {
    $("#translation-result .word").html(loadedTranslations[translationsIndex][1]);

    if (loadedTranslations.length == (translationsIndex + 1)) {
      translationsIndex = 0;
    } else {
      translationsIndex++;
    }
  }

  function loadDataFromCSV(csvData) {
    var translationsFromCSV = Papa.parse(csvData, {"delimiter": ","});
    var translationsForTheApp = []

    for (var i=0; i<translationsFromCSV.data.length; i++) {
      var translation = translationsFromCSV.data[i];
      translationsForTheApp[i] = [];
      translationsForTheApp[i][0] = translation[0];
      translationsForTheApp[i][1] = "";

      for (var j=1; j<translation.length; j++) {
        translationsForTheApp[i][1] += translation[j].trim();
      }
    }

    return translationsForTheApp;
  }

  $("#translation-guess").on("pagebeforeshow", function() {
    updateTranslationQuizz();
  });

  $("#translation-result").on("pagebeforeshow", function() {
    updateTranslationResult();
  });

  $("#import .button").click(function() {
    loadedTranslations = loadDataFromCSV($("#import textarea").val());
  });

});